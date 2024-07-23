//@ts-nocheck
import { toast } from "react-toastify";
import { Pubkey, pubkeyToAddress } from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { verifyADR36Amino } from "@keplr-wallet/cosmos";
import { WalletVerificationPackage } from "../utils/datatypes";
import { StdSignature } from "@keplr-wallet/types";

export function getActiveWallet() : any {
  const walletInfo = window.localStorage.getItem("wallet");
  if (!walletInfo) {
    return undefined;
  }

  try {
    const parsedWalletInfo = JSON.parse(walletInfo);

    if (parsedWalletInfo.provider === "owallet") {
        return window.owallet;
    } else if (parsedWalletInfo.provider === "keplr") {
        return window.keplr;
    } else if (parsedWalletInfo.provider === "leap") {
        return window.leap;
    } else {
      toast.error("Unsupported wallet provider");
      return undefined;
    }
  }
  catch(err) {
    console.error("Error during wallet retrieval", err);
    toast.error("Can't retrieve wallet");
    return undefined;
  }
}

export async function signMessage(message : string) : Promise<WalletVerificationPackage> {
  const wallet = getActiveWallet();

  if(!wallet || !message) {
    toast.error("Can't sign message");
  }

  const offlineSigner = wallet.getOfflineSigner("Oraichain");
  const accounts = await offlineSigner.getAccounts();
  const address = accounts[0].address;
  window.keplr.signArbitrary();
  const signature : StdSignature = await wallet.signArbitrary("Oraichain" , address , message);

  if(verifyMessage(address , message , signature.signature , signature.pub_key)){
    toast.warning("Credentials signed : proceesing with the action");
  }
  else {
    toast.warning("Error during credential signign : aborting");
    setTimeout(() => window.location.href = "/home", 1000);
  }

  return {
      message,
      address,
      signature
  } as WalletVerificationPackage;
}

function verifyMessage(address , message , signature , pubKey : Pubkey ) {
  try {
      // Verify the address
      const expectedAddress = pubkeyToAddress(pubKey , "orai");
      if (address !== expectedAddress) {
        toast.error(`expected ${address} got ${expectedAddress}`)
      }

      const publicKey : Uint8Array = fromBase64(pubKey.value);
      const byteSignature : Uint8Array = fromBase64(signature);

      return verifyADR36Amino("orai" , address , message , publicKey , byteSignature , "secp256k1");

    } catch (error) {
      console.error('Verification error:', error);
    }
}

export async function retrieveWalletAddress () {
  const wallet = getActiveWallet();

  if(!wallet)
    return;

  const offlineSigner = wallet.getOfflineSigner("Oraichain");
  const accounts = await offlineSigner.getAccounts();
  const activeAddress = accounts[0].address;

  //Confront the active wallet with the one saved in storage, if it's different update it
  const walletInfo = window.localStorage.getItem("wallet");
  const savedAddress = JSON.parse(walletInfo).address;

  if(savedAddress !== activeAddress) {
    toast.warning("Missmatch wallet detected");
    window.localStorage.removeItem("wallet");
    setTimeout(() => window.location.reload() , 1500);
  }
  else {
    return activeAddress;
  }
}

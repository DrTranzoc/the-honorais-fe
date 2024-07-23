//@ts-nocheck
import { toast } from "react-toastify";
import { OfflineSigner } from '@cosmjs/launchpad';
import { Pubkey, pubkeyToAddress } from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { verifyADR36Amino } from "@keplr-wallet/cosmos";

export function camelize(str : string) : string {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}

export function prepareLink(link  : string | undefined) : string {
  if(link)
    return encodeURI(link.replace(' ','+')
                        .replace(' ','+')
                        .replace(' ','+')
                        ).replace('#','%23')
  return ""
}

export function epochToTimeLeft(epoch : number) : string{
  const currentTime = Math.floor(Date.now() / 1000)
  const timeLeft = currentTime > epoch ? currentTime - epoch : epoch - currentTime;
  var days = Math.floor(timeLeft / (60 * 60 * 24));
  var hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  var seconds = timeLeft % 60;

  return `${days}D: ${hours}H :${minutes}M :${seconds}S`
}

export function transformBigNumber(number : number) : string {
  if (number < 10000) {
      return number.toString();
  } else if (number < 1000000) {
      return (number / 1000).toFixed(1) + 'k';
  } else if (number < 1000000000) {
      return (number / 1000000).toFixed(1) + 'M';
  } else if (number < 1000000000000) {
      return (number / 1000000000).toFixed(1) + 'B';
  } else {
      return number.toString();
  }
}
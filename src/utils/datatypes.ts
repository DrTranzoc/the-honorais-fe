import { StdSignature } from "@keplr-wallet/types";


export interface HonoraisContextInterface {
  theme: "dark" | "light";
}

type WalletVerificationPackage = {
  message : String,
  signature : StdSignature,
  address : String
}

type DiscordUserInfo = {
  discordId : string,
  username : string,
  avatar : string
}

type NFTData = {
  token_id : string,
  media : string,
  attributes : any
}

export type { WalletVerificationPackage , DiscordUserInfo , NFTData};
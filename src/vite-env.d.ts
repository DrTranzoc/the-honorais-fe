/// <reference types="vite/client" />
import { Window as KeplrWindow, keplr } from "@keplr-wallet/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {
    wallet: keplr;
  }
}
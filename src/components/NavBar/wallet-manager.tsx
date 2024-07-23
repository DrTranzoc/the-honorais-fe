//@ts-nocheck
/// <reference types="vite-plugin-svgr/client" />
import { useContext, useEffect, useState } from "react";
import { HonoraisContext } from "../../App";
import { WalletButton } from "./NavBarStyled";

import { Wallet } from "@injectivelabs/wallet-ts";

import KeplrIcon from "../../assets/icons/svg/keplr_icon.svg?react";
import LeapIcon from "../../assets/icons/svg/leap_icon.svg?react";
import OWalletIcon from "../../assets/icons/svg/owallet-logo.svg?react";

import CloseIcon from "../../assets/icons/svg/mobile-menu-close.svg?react"
import { toast } from "react-toastify";

const walletSupported = [
  {
    name : "leap",
    logo : <><LeapIcon></LeapIcon></>,
  },
  {
    name : "keplr",
    logo : <><KeplrIcon></KeplrIcon></>,
  },
  {
    name : "owallet",
    logo : <><OWalletIcon></OWalletIcon></>,
  }
]

const WalletManager = ({isMenuExpanded} : any) => {
  const { themeContext } = useContext(HonoraisContext);
  const [ walletPlaceholder, setWalletPlaceholder] = useState("CONNECT");
  const [isConnected , setIsConnected ] = useState(false);
  const [ walletSelection , setWalletSelection ] = useState(false);

  useEffect(() => {
    if(window.localStorage.getItem("wallet")) {
      const item = window.localStorage.getItem("wallet");
      if(item)
      {
        const address = JSON.parse(item)!.address;
        setIsConnected(true);
        setWalletPlaceholder(
          address.slice(0, 4) +
            "..." +
            address.slice(address.length - 5, address.length)
        );
      }
    }
  }, []);

  const handleWalletConnect = async (wallet : string) => {
    if (wallet === "keplr" && window.keplr) {
      const offlineSigner = window.keplr.getOfflineSigner("Oraichain");
      offlineSigner.getAccounts().then((accounts: any) => {
        const address = accounts[0].address;
        /*         setConnectedAccount(address); */
        setWalletPlaceholder(
          address.slice(0, 4) +
            "..." +
            address.slice(address.length - 5, address.length)
        );

        window.wallet = offlineSigner;

        window.localStorage.setItem(
          "wallet",
          JSON.stringify({
            address: address,
            isMobile: false,
            provider: "keplr"
          })
        );
        setIsConnected(true);
        toast.success("Wallet connected!")
        setTimeout(() => window.location.reload(), 150);
      });
    }
    else if (wallet === "leap" && window.leap) {
      const offlineSigner = window.leap.getOfflineSigner("Oraichain");
      offlineSigner.getAccounts().then((accounts: any) => {
        const address = accounts[0].address;
        /*         setConnectedAccount(address); */
        setWalletPlaceholder(
          address.slice(0, 4) +
            "..." +
            address.slice(address.length - 5, address.length)
        );

        window.wallet = offlineSigner;

        window.localStorage.setItem(
          "wallet",
          JSON.stringify({
            address: address,
            isMobile: false,
            provider: "leap",
          })
        );

        setIsConnected(true);
        toast.success("Wallet connected!")
        setTimeout(() => window.location.reload(), 150);
      });
    }
    else if (wallet === "owallet" && window.owallet) {
      const offlineSigner = window.owallet.getOfflineSigner("Oraichain");
      offlineSigner.getAccounts().then((accounts: any) => {
        const address = accounts[0].address;
        /*         setConnectedAccount(address); */
        setWalletPlaceholder(
          address.slice(0, 4) +
            "..." +
            address.slice(address.length - 5, address.length)
        );

        window.wallet = offlineSigner;

        window.localStorage.setItem(
          "wallet",
          JSON.stringify({
            address: address,
            isMobile: false,
            provider: "owallet",
          })
        );
        setIsConnected(true);
        toast.success("Wallet connected!")
        setTimeout(() => window.location.reload(), 150);
      });
    }
  };

  const handleWalletSelection = async() => {
    if(isConnected){
      window.localStorage.removeItem("wallet");
      window.wallet = undefined;
      setIsConnected(false);
      setWalletPlaceholder("CONNECT");
      toast.warning("Wallet disconnected!")
      setTimeout(() => window.location.reload(), 150);
    }
    else {
      toggleWalletSelection()
    }
  }

  const toggleWalletSelection = () => {
    setWalletSelection(prev => !prev)
  }

  return (
    <>
      <WalletButton
        onClick={(elem) => {if(elem.target.id !== "obscure-bg") handleWalletSelection()}}
        id="secondary-wallet-btn" current_theme={themeContext.theme} menu_expanded={"" + isMenuExpanded.toString()}
      >
        <p className="wallet-placeholder">{walletPlaceholder}</p>
        {
          walletSelection ?
          <>
            <div id="obscure-bg" className="obscure-background" onClick={(elem) =>{ if(elem.target.id === "obscure-bg") toggleWalletSelection()}}></div>
            <div className="wallet-selection-div">
                <h1>Select wallet</h1>
                <div className="exit-wallet-submenu">
                  <CloseIcon></CloseIcon>
                </div>
                {
                  walletSupported.map((val , index) => (
                    <>
                      <div key={`wallet-${index}`}className="wallet-type-div" onClick={() => handleWalletConnect(val.name)}>
                        {val.logo}
                        <p className="wallet-label">{val.name}</p>
                      </div>
                    </>
                  ))
                }
            </div>
          </>
          : null
        }
      </WalletButton>
      
    </>
  );
};

export default WalletManager;
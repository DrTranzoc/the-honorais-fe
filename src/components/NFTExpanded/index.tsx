//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { NFTData } from "../../utils/datatypes";
import { HonoraisContext } from "../../App";
import { useContext } from "react";
import { NFTExpanded } from "./NFTExpandedStyles";
import { prepareLink } from "../../utils/utils";

import ExitIcon from "../../assets/icons/svg/exit-point-svgrepo-com.svg?react"
import { DiscordManager } from "../../scripts/discord-manager";
import { toast } from "react-toastify";

const NFT_STATS = [
    "str",
    "dex",
    "int",
    "luck"
]

const NFTExpandedComponent = ({ nftData , setForeground}: { nftData: NFTData , setForeground : any}) => {
    const discordHandler = new DiscordManager();
    const { themeContext, switchTheme } = useContext(HonoraisContext);

    const setNFTAsDefault = async () => {
        toast.warning("Changing default NFTs...")
        const response = await discordHandler.setDefaultNFT(nftData);
        if(response.status === 201) {
            toast.success("NFT changed successfully!");
            setTimeout(() => window.location.reload())
            setForeground(null);
        }
    }

    return (
        <>
            {
                nftData ?
                <NFTExpanded id="overlay-background" current_theme={themeContext.theme} onClick={(event) => { if(event.target.id === "overlay-background") setForeground(null) }}>
                    <div id="nft-div" className="nft-div">
                        <h1>{nftData.attributes.title}</h1>
                        <img src={prepareLink(nftData.media)} alt="nft-foreground"></img>
                        <div className="nft-stats">
                        {
                            NFT_STATS.map((stat , idx_s) => {
                                return (
                                    <p 
                                        className={"stat"}
                                        key={`nft-stat-${idx_s}`}>
                                        {stat.toUpperCase() + " " + nftData.attributes[stat]}
                                    </p>
                                )
                            })
                        }
                        </div>
                        <div className="nft-option">
                            <div id="action-button" className="default-action-button" onClick={setNFTAsDefault}>SET AS DEFAULT</div>
                        </div>
                        <ExitIcon onClick={() => setForeground(null)}></ExitIcon>
                    </div>
                </NFTExpanded>
                : null
            }
        </>
    )
};

export default NFTExpandedComponent;
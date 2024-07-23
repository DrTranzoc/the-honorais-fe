//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useQuery } from "react-query";
import { useContext, useEffect, useRef, useState } from "react";
import { HonoraisContext } from "../../App.tsx";
import { ProfileMain , Banner, ProfileArea} from "./styles/profileStyles.ts";
import { toast } from "react-toastify";

import LoadingIcon from "../../assets/icons/svg/animated/loading.svg?react";
import DiscordIcon from "../../assets/icons/svg/discord.svg?react";
import DisconnectDiscord from "../../assets/icons/svg/door-exit-svgrepo-com.svg?react";

import { DiscordManager } from "../../scripts/discord-manager.ts";
import { useLocation } from "react-router-dom";
import jwtDecode from 'jsonwebtoken/decode.js';
import { signMessage } from "../../scripts/wallet-handler.ts";
import { NFTData } from "../../utils/datatypes.ts";
import { BackendManager } from "../../scripts/backend-manager.ts";
import { prepareLink } from "../../utils/utils.tsx";
import NFTExpandedComponent from "../../components/NFTExpanded/index.tsx";

const NFT_STATS = [
    "str",
    "dex",
    "int",
    "luck"
]

const Profile = () => {
    const discordManager = new DiscordManager();
    const backEndManager = new BackendManager();

    const { themeContext } = useContext(HonoraisContext);
    const [ address , setAddress ] = useState("")
    const [ discordUsername , setDiscordUsername ] = useState("");
    const [ featuredImage , setFeaturedImage ] = useState("https://honorais-datalake.s3.eu-north-1.amazonaws.com/media/branding/Generic+NFT.png");
    const [ discordImage , setDiscordImage ] = useState("");

    const [userNFTs , setUserNFTs] = useState([] as Array<NFTData>);
    const [activeSort , setActiveSort ] = useState("str");
    const [sortOrder , setSortOrder] = useState("desc");
    const [sortMenu , setSortMenu ] = useState(false);
    const [activeNFTData, setActiveNFTData] = useState("");

    const [foregroundNFT , setForegroundNFT] = useState(null as NFTData);
    
    const location = useLocation();
    
    const fetchUserNFT = async () => await backEndManager.getUserNFTs();

    const fetchUserInfo = () => async () => await discordManager.getUserInfo();
    
    //Get user info
    const { isLoading, error } = useQuery(["discordInfo"] , fetchUserInfo(), {
        onSuccess : async (data : any) => {
            if(discordUsername == "" && data && data.data){
                const userInfo = data.data;
                setDiscordImage(`https://cdn.discordapp.com/avatars/${userInfo.discordId}/${userInfo.avatar}?size=256`);
                setDiscordUsername(userInfo.username);

                //fetch user NFTs
                const userNFTs = (await fetchUserNFT()).data!;
                setUserNFTs(sortNFTsBy(userNFTs , activeSort));
                if(userInfo.defaultNFT && userInfo.defaultNFT.media){
                    setFeaturedImage(prepareLink(userInfo.defaultNFT.media));
                    setActiveNFTData(userInfo.defaultNFT.attributes.title);
                }
            }
        }
    });
    
    useEffect(() => {
        const wallet = window.localStorage.getItem("wallet");
        if(!wallet) {
            toast.warning("Need to connect a wallet first");
            setTimeout(() => window.location.href = "/home", 1500);
        }
        else {
            setAddress(JSON.parse(wallet).address);
            unpackDiscordSession(JSON.parse(wallet).address);
        }
    } , []);

    useEffect(() => {
        
    }, [foregroundNFT]);

    const unpackDiscordSession = async (userAddress : string) => {
        const queryParams = new URLSearchParams(location.search);
        const sessionToken = queryParams.get('Session');
        if(sessionToken){

            if(sessionToken === "discord-already-linked") {
                toast.warning("The discord is already tied to a wallet, disconnect it first.");
                return;
            }

            toast.warning("Link your wallet to your discord");

            const { signature , address } = await signMessage(sessionToken+";;"+userAddress);

            const register = await discordManager.linkWalletToDiscord(address , sessionToken , signature);

            if(!register || register.status === 404 || register.status === 500) {
                toast.error("Error during user registration");
            }
            else {
                const {id , avatar , username } = jwtDecode(sessionToken);
                toast.success(`user discord linked to ${address}`);

                setDiscordImage(`https://cdn.discordapp.com/avatars/${id}/${avatar}?size=128`);
                setDiscordUsername(username);

                setTimeout(() => window.location.href = "/profile", 1000);
            }
        }
    }

    const toggleMenu = () => setSortMenu(prev => !prev);

    const switchSortOrder = () => setSortOrder(prev => prev === "desc" ? "asc" : "desc");

    const sortNFTsBy = (userNFTs : Array<NFTData> , sortby : string) : Array<NFTData> => {
        if(userNFTs && userNFTs.length > 0){
            userNFTs.sort((a , b) => 
                sortOrder === "asc" ? 
                a.attributes[sortby] - b.attributes[sortby] :
                b.attributes[sortby] - a.attributes[sortby]);
        }
        return userNFTs;
    }

    useEffect(() => {
        setUserNFTs(sortNFTsBy(userNFTs.map(x => x) , activeSort));
    }, [activeSort , sortOrder, sortMenu]);

    return (
        <>
          <ProfileMain current_theme={themeContext.theme}>
            <Banner current_theme={themeContext.theme}>
                <h1>Your area</h1>
            </Banner>
            {
                address ? 
                <ProfileArea current_theme={themeContext.theme}>
                    <div className="user-details">
                        <div className="user-data">
                            <div className="big-header">
                                <h1>User profile</h1>
                                <div className="underline"></div>
                            </div>
                            <h1>{address}</h1>
                            <div className="discord-area">
                                {
                                    discordUsername !== "" ?
                                    <div className="discord-user-info">
                                        <DiscordIcon></DiscordIcon>
                                        <p>{discordUsername}</p>
                                        <img className="discord-img" src={discordImage}></img>
                                        <DisconnectDiscord onClick={
                                            () => discordManager.disconnectFromDiscord()
                                        }></DisconnectDiscord>
                                    </div>:
                                    <div className="connect-discord-button" onClick={async () => {
                                            await discordManager.connectToDiscord()
                                        }
                                    }>
                                        <p>CONNECT</p>
                                        <DiscordIcon></DiscordIcon>
                                    </div>
                                }
                            </div>
                            {
                            userNFTs && userNFTs.length > 0 ? 
                                <p>{`Owned NFTs: ${userNFTs.length}`}</p> : null
                            }
                            {
                            activeNFTData !== ""? 
                                <p className="active-nft">{`Active NFT: ${activeNFTData}`}</p> : null
                            }
                        </div>
                        <img className="user-img" src={featuredImage}></img>
                    </div>
                    {
                        userNFTs && userNFTs.length > 0 ?
                        <div className="user-nfts">
                            <div className="header">
                                <div className="big-header">
                                    <h1>Your NFTs</h1>
                                    <div className="underline"></div>
                                </div>
                                <div className="sort-option">
                                    <div id="sort-menu" className="sort-by" onClick={(event) => {
                                            if(event.target.id! !== "stat")
                                                toggleMenu();
                                        }}>
                                        <p className="label">sort by</p>
                                        {!sortMenu ? 
                                        <p >{activeSort.toUpperCase()}</p> : null}
                                        {
                                            sortMenu ? 
                                            <div className="hidden-option">
                                                {
                                                NFT_STATS.map((stat , idx_s) => 
                                                (<p 
                                                    id="stat" 
                                                    key={`stat-${idx_s}`}
                                                    onClick={() => {
                                                    setActiveSort(stat);
                                                    toggleMenu();
                                                }}>{stat.toUpperCase()}</p>))
                                                }
                                            </div>
                                            : null
                                        }
                                    </div>
                                    <div className="sort-order" onClick={switchSortOrder}>
                                        <p>{sortOrder}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="nft-datas">
                                {
                                    userNFTs.map((val : NFTData,idx : number) => {
                                            return (
                                                <div key={`card+${idx}`} className="nft-card" onClick={() => setForegroundNFT(val)}>
                                                    <img src={prepareLink(val.media)} alt={`card+${idx}`}></img>
                                                    <h1>{val.attributes.title ?? "unknown"}</h1>
                                                    <div className="nft-stats">
                                                        {
                                                            NFT_STATS.map((stat , idx_s) => {
                                                                return (
                                                                    <p 
                                                                        className={activeSort === stat ? "active-sort" : ""}
                                                                        key={`nft-stat-${idx_s}`}>
                                                                        {stat.toUpperCase() + " " + val.attributes[stat]}
                                                                    </p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                            {
                                foregroundNFT !== null ?
                                <NFTExpandedComponent nftData={foregroundNFT} setForeground={setForegroundNFT}></NFTExpandedComponent> 
                                : null
                            }
                        </div>
                        :
                        <div className="loading">
                            {
                                isLoading ? 
                                <LoadingIcon></LoadingIcon> :
                                <h1>NO DATA...</h1>
                            }
                        </div> 
                    }
                </ProfileArea>
                :<div className="loading">
                    <LoadingIcon></LoadingIcon>
                </div>
            }
          </ProfileMain>
        </>
        )
}

export default Profile;
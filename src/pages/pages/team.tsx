/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useContext } from "react";
import { TeamMain , Banner, TeamContent } from "./styles/teamStyles";
import { HonoraisContext } from "../../App";

import drt_pfp from "../../assets/brand/HonOrai_Hi.png";
import piano_pfp from "../../assets/brand/HonOrai_Mizu-2.jpg";
import XIcon from "../../assets/icons/svg/x-icon-primary.svg?react";

const team_members = [
    {
        name : "DrTranzoc",
        profilePicture : drt_pfp,
        twitter: "https://x.com/DrTranzoc",
        roleTitle: "Founder - Developer",
        description: 
        <>
            Founder of: The Honorais, The Musicians (INJ), Discoverinj (INJ).
            <br/>
            <br/>
            Hi samorais! I'm the main developer of the team, my skills range from developing smarcontracts and website, to crypto and non-crypto games.
        </>
    },
    {
        name : "Pianoforte",
        profilePicture : piano_pfp,
        twitter: "https://x.com/Pianoforteee",
        roleTitle: "Founder - Social Leader",
        description: 
        <>
            Founder of: The Honorais, The Musicians (INJ), Discoverinj (INJ).
            <br/>
            <br/>
            Hello guys!! My name is Pianoforte, I am the social leader of The HonOrais and The Musicians, and also a composer. I mainly play guitar but I really like piano too.
        </>
    }
]

const Team = () => {
    const { themeContext, switchTheme } = useContext(HonoraisContext);
    return (
        <>
          <TeamMain current_theme={themeContext.theme}>
                <Banner current_theme={themeContext.theme}>
                    <h1>MEET THE TEAM</h1>
                </Banner>
                <TeamContent current_theme={themeContext.theme}>
                    <div className="inner-team-container">
                        <p>
                            The team of 'The Honorais' is composed by experienced members on the cosmos ecosystem
                            <br/>
                            DrTranzoc and Pianoforte landed on earlly 2019 on the crypto space, and after 5 years of crypto experience they shipped a CW404 GameFi project on Injective: <a className="link" onClick={() => window.open("https://themusiciansnft.com/" , "_blank")}>The Musicians</a>
                            <br/>
                            <br/>
                            They proved their building skills by also co-founding the first native NFT explorer on injective: <a className="link" onClick={() => window.open("https://alpha.discoverinj.com/home" , "_blank")}>Discoverinj</a>, which even is in it's alpha state, allready provides crucial tools to the Injective ecosystem.
                            <br/>
                            <br/>
                            Eagored to expand they land on ORAI with the objective to shape-up the NFT ecosystem with their services and their will to create a strong and cohese community.
                        </p>
                    </div>
                    {
                        team_members.map((val, idx) => {
                            return (
                                <>
                                <div key={"team-member-" + val.name.toLowerCase()} className="team-member-container">
                                    <h1 className="team-member-name">{val.name}</h1>
                                    <h1 className="team-member-title">{val.roleTitle}</h1>
                                    <div className="team-member-socials">
                                        <p>Social </p>
                                        <XIcon onClick={() => window.open(val.twitter , "_blank")}></XIcon>
                                    </div>
                                    <img className="team-member-image" src={val.profilePicture} alt={"pfp-" + val.name.toLowerCase()}></img>
                                    <p className="team-member-description">{val.description}</p>
                                </div>
                                </>
                            )
                        })
                    }
                </TeamContent>
          </TeamMain>
        </>
        )
}

export default Team;
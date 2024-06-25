/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useContext, useEffect, useRef, useState } from "react";
import { HonoraisContext } from "../../App";
import { HomeMain } from "./styles/homeStyles.ts";

import clouds from "../../assets/brand/Clouds-bg.png";
import tree from "../../assets/brand/Tree-bg.png";
import moon from "../../assets/brand/moon-bg.png";
import mascotte from "../../assets/brand/mascotte-bg.png";
import mascotteSlim from "../../assets/brand/mascotte-bg-slim.png";
import mountain from "../../assets/brand/Mountain-bg.png";

import air_nft from "../../assets/brand/HonOrai_KuKi.png";
import earth_nft from "../../assets/brand/HonOrai_Tsuchi.png";
import water_nft from "../../assets/brand/HonOrai_Mizu.jpg";

import fire_nft from "../../assets/brand/HonOrai_Hi.png";
import water_nft_2 from "../../assets/brand/HonOrai_Mizu-2.jpg";

import Oraichain from "../../assets/icons/svg/ORAICHAIN.svg?react";

function isElementVisible(element, thresholdPixels = 20) {
  if (!element.id) {
    return false;
  }
  const elm = document.getElementById(element.id);

  const rect = elm.getBoundingClientRect();

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const verticalVisiblePixels = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));

  return verticalVisiblePixels >= thresholdPixels
}

const Home = () => {
  const { themeContext, switchTheme } = useContext(HonoraisContext);
  const [offsetY, setOffSetY] = useState(0);
  const sections = useRef(new Array())

  useEffect(() => {
    const handleScroll = () => {
      for(var i=0;i< sections.current.length;i++){
        var e = sections.current[i]
        if(e){
  
          if(e.id.startsWith("section-id")){
            if(isElementVisible(e, 100)){
              e.style.scale = `calc(${1})`
              e.style.opacity = 1;
            }
            else {
              e.style.scale = 'calc(0.8)'
              e.style.opacity = 0.3;
            }
          }
          
          if(e.id.startsWith("gallery-middle-text")) {
            console.log(e.id , isElementVisible(e, 100));
            if(isElementVisible(e, 10)){
              e.style.opacity = 1;
              e.style.fontSize = "2rem"
            }
            else {
              e.style.opacity = 0;
              e.style.fontSize = "1rem"
            }
          }

        }
      }
      setOffSetY(window.scrollY);
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HomeMain current_theme={themeContext.theme}>
        <div className="first-page">
          <div className="parallax-background">
              <div id="background"></div>
              {/* <img id="stars" src={stars} alt={"stars"}></img> */}
              <img id="moon" src={moon} alt={"moon"} 
                style={{ transform : `translateY(${offsetY * 0.5}px`}}
              />
              <img id="clouds" src={clouds} alt={"clouds"}
                style={{ transform : `translateY(${offsetY * -0.8}px`}}
              />
              <h1 id="banner-title" style={{ transform : `translateY(${offsetY * 0.35}px`}}>THE HONORAIS</h1>
              <img id="muntain" src={mountain} alt={"mountain"}></img>
              <img id="clouds-2" src={clouds} alt={"clouds"}
                style={{ transform : `translateY(${offsetY * 0.2}px`}}
              />
              <img id="tree" src={tree} alt={"tree"}
                style={{ transform : `translateX(${offsetY * -0.12}px`}}
              />
              {/* <img id="mascotte" src={mascotte} alt={"mascotte"}></img> */}
              <img id="mascotte" src={mascotteSlim} alt={"mascotte"}></img>
          </div>
        </div>


        <div id="section-id-0" className="page-text-container" style={{marginTop:"100px"}} ref={(element) => sections.current.push(element)}>
            <img src={air_nft} alt="air_nft" className="text-image"></img>
            <div className="text-box">
              <h1>PIONEERING NFTs ON ORAI</h1>
              <p>
              The HonOrais is the second-ever collection launching soon on <strong>Oraichain</strong>.
              This project aims to integrate AI-GameFi and cool tools into the blockchain, enhancing the user experience.
              <br/>
              Our team of builders is dedicated to establishing a long-term, vibrant ecosystem centered around NFTs, that extend beyond our collection.
              <br/>
              The collection features a unique theme inspired by the clan of the Honorai, technologically advanced samurais who have mastered the art of manipulating the elements of the earth. 
              <br/>
              Drawing on our extensive experience and expertise from our current NFT project on <strong>Injective</strong>, <a className="link" onClick={() => window.open("https://themusiciansnft.com/" , "_blank")}>The Musicians</a> , 
              we are confident that The HonOrais will set a new benchmark for future builders in the space.
              </p>
            </div>
        </div>
        
        
        <div className="nft-gallery">
            <div id="gallery-nft" className="nft-div">
              <img id="left-nft" src={water_nft_2} alt="water_honorai_2"></img>
            </div>
            <h1 id="gallery-middle-text" className="gallery-middle-text" ref={(element) => sections.current.push(element)}>
            “Bringing the Bushido on ORAI Blockchain”
            </h1>
            <div id="gallery-nft" className="nft-div">
              <img id="right-nft" src={fire_nft} alt="fire_honorai"></img>
            </div>
        </div>
        
        
        <div id="section-id-1" className="page-text-container" ref={(element) => sections.current.push(element)}>
            <div className="text-box">
              <h1>HONOR AND BLOOD</h1>
              <p>
              The HonOrai collection is composed by four families, each family is named respecting the element they learnt to bend at their will: 
              <br/>
              Fire (<strong>火 hi</strong>), Water (<strong>水 Mizu</strong>), Earth, (<strong>土 tsuchi</strong>), Air (<strong>空気 kūki</strong>)
              <br/>
              <strong>Ryuu Honorai</strong>, the red dragon, is the head of the HonOrai clan he is a master of every element and has never got the taste of defeat, if you see him it means you are not the target.
              <br/>
              Every family has his own bushido, live following their own creed, but they come together to defeat they enemies but things have changed...
              </p>
            </div>
        </div>

        <div id="section-id-2" className="page-text-container" ref={(element) => sections.current.push(element)}>
            <img src={water_nft} alt="water_nft" className="text-image"></img>
            <div className="text-box">
              <h1>ORAICHAIN</h1>
              <p>
              We committed to land on Oraichain since we firmly sure it will be one of the most prominent AI blockchain in the crypto space, we are eagored to contribute towards his success as we strongly believe in it's awesome technology and it's competent team.
              <br/>
              We directly worked with them to bring innovation on the NFT ecosystem on ORAI, but not only that!...
              </p>
            </div>
        </div>

        <div className="orai">
          <Oraichain onClick={
            () => window.open("https://orai.io/" , "_blank")
          }></Oraichain>
        </div>
      </HomeMain>
    </>
  );
};

export default Home;

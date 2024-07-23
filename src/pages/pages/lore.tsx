/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useContext, useRef } from "react";
import { Banner, LoreMain } from "./styles/loreStyles";
import { HonoraisContext } from "../../App";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import ArrowIcon from "../../assets/icons/svg/arrow-icon.svg?react";

import mountain from "../../assets/brand/lore-parallax-mountain.png";
import moon from "../../assets/brand/lore-parallax-moon.png";
import tree from "../../assets/brand/Tree-bg.png";
import clouds from "../../assets/brand/lore-parallax-clouds.png";
// import moon from "../../assets/brand/moon-bg.png";

const pages = [
  {
    title : "名誉, Meiyo: Honor",
    text : <>
      <p>
      In the 24th century, in a remote area of Japan, despite the immense 
      technological progress the humanity has made in the last 2 centuries, people still live respecting ancient traditions and 
      values handed down for ages in that land: <strong>honor and loyalty</strong>.
      <br/>
      <br/>
      The control of this land was assigned out of gratitude by the emperor to a 
      family that had served him faithfully for centuries: the Honorais.
      <br/>
      <br/>
      The first male heirs of the Honorais pass on this privilege by governing 
      diligently and impartially over the habitants of that land which provides them with precious energy elements used,  
      to power their armor and protect their interests.
      <br/>
      <br/>
      But extracting and refining costs sweat and tears.
      </p>
    </>
  },
  {
    title : "伝統, dentō: Tradition",
    text : <>
      <p>
      Upon reaching the age of 16, each male born in that territory undergoes rigorous scrutiny 
      and is eventually assigned to one of the four families based on his unique characteristics. 
      The Tsuchi family then will hand to those chosen their first energy core and the necessary equipment, 
      marking the completion of their initiation.
      <br/>
      <br/>
      The 4 cores power different types of technological armor that evoke the 4 
      natural elements:
      <br/>
      <br/>
      Water - 水 - Mizu
      <br/>
      Earth - 土 - Tsuchi
      <br/>
      Fire - 火 - Hi
      <br/>
      Air - 空気 - Kūki
      <br/>
      <br/>
      From the moment of assignment, each samurai enters into symbiosis with their designated element. 
      This element becomes more than just the source of their formidable powers; it integrates deeply 
      into their very essence, shaping their battle training and life philosophy.
      </p>
    </>
  },
  {
    title : "家族, kazoku: Family",
    text : <>
    <p>
    The Honorais defend their territory together despite being divided into 4 different
    families, each ruled by the respective general, each of whom is a son of the legendary
    Ryu, 'the red dragon', the only Honorai that managed to control all four elements.
    <br/>
    <br/>
    In the beginning bandits were their only enemies, protecting their respective family was
    the maximum duty, the only life purpose of an HonOrai.
    <br/>
    But things changed as a dark alliance growed in the shadow, resenting the HonOrai creed and
    blinded by the desire to obtain forbidden powers.
    </p>
    </>
  },
  {
    title : "紛争, funso: Conflict",
    text : <>
      <p>
      During one of the numerous expeditions carried out by the Honorais, where 
      everyone fights side by side to defend what they hold most dear, something 
      unthinkable happened among the ranks of the HonOrais.
      <br/>
      <br/>
      Mizunosuke, ronin in trial with the MiZu family, decided to spare an enemy whose spirit was 
      already defeated, allowing him to retreat. But in the blink of an eye, he felt 
      pierced by a warm friendly blade.
      <br/>
      <br/>
      Kaenmaru, an initiated HonOrai of the Hi, could not tolerate that act of mercy in battle, 
      even if committed by an ally, and decided to execute Mizunosuke, leaving him in the dust.
      <br/>
      <br/>
      Kaenmaru, now sought after by the MiZu family, fled as far as possible, but 
      the consequences of his actions remained even after the battle. 
      <br/>
      <br/>
      During the council between the families, two factions emerged: the earth could not 
      tolerate such profane use of the katana they had meticulously crafted and 
      thus sided with the MiZu family; the Kūki, on the other hand, took sides with the Hi family,
      believing that personal feelings should not interfere with the inesorable duty of a samurai
      therefore justify the actions of Kaenmaru.
      <br/>
      <br/>
      A long lasting balance broke that night.
      <br/>
      It was the beginning of a civil war.
      </p>
    </>
  }
]

const Lore = () => {
    const { themeContext, switchTheme } = useContext(HonoraisContext);
    const ref = useRef(null);
    return (
        <>
          <LoreMain current_theme={themeContext.theme}>
            <Banner current_theme={themeContext.theme}>
                <h1>LORE - PROLOGUE</h1>
            </Banner>
            <div className="lore-content-page">
            <Parallax pages={4} horizontal={true} ref={ref}>
              {
                pages.map((val , idx) => {
                  return (
                    <>
                    <ParallaxLayer
                      offset={idx}
                      factor={1}
                      style={{zIndex:100}}
                      sticky={idx === pages.length -1 ? {start: idx , end: idx+100} : null}
                    >
                      <div className="parallax-text">
                        {
                          idx < pages.length - 1 ?
                          <ArrowIcon className="next-icon" onClick={() => ref.current.scrollTo(idx+1)}></ArrowIcon> : null
                        }
                        {
                          idx > 0 ?
                          <ArrowIcon className="previous-icon" onClick={() => ref.current.scrollTo(idx-1)}></ArrowIcon> : null
                        }
                        <div className="text-container">
                          <h1>{val.title}</h1>
                          {
                            val.text
                          }
                        </div>
                      </div>
                    </ParallaxLayer>
                    </>
                  )
                })
              }

              <ParallaxLayer
                id="moon"
                offset={1}
                speed={0.5}
                factor={2}
                style={{zIndex:-5}}>
                  <img src={moon} alt="moon" ></img>
              </ParallaxLayer> 

              <ParallaxLayer
                id="lore-mountain"
                offset={0}
                speed={0.5}
                factor={4}
                sticky={{ start: 0.5, end: 1.5 }}
                style={{zIndex:-4}}
                >
                  <img src={mountain} alt="mountain"></img>
              </ParallaxLayer> 

              <ParallaxLayer
                offset={0}
                speed={0.5}
                factor={4}
                style={{zIndex:-3}}
                >
                  <img id="lore-tree" src={tree} alt="tree"></img>
              </ParallaxLayer>

              <ParallaxLayer
                id="clouds"
                offset={0}
                speed={0.1}
                factor={4}
                sticky={{ start: 0, end: 1.5 }}
                style={{zIndex:-2}}
                >
                  <img 
                  src={clouds}  
                  style={{opacity:"0.4"}}
                  ></img>
                </ParallaxLayer>
              
              

              <ParallaxLayer 
                id="background"
                style={{zIndex:-10}} 
                offset={0}
                sticky={{start:0 , end: 100}}/>
            </Parallax>
            </div>
          </LoreMain>
        </>
        )
}

export default Lore;
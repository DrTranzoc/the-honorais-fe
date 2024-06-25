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
    title : "PROLOGUE",
    text : <>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  },
  {
    title : "INCIDENT",
    text : <>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  },
  {
    title : "TENSION",
    text : <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </>
  },
  {
    title : "CONFLICT",
    text : <>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <h1>LORE</h1>
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
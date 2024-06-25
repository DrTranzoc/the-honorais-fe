/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useContext, useRef } from "react";
import { HonoraisContext } from "../../App";
import { GameFiMain , Banner} from "./styles/gamefiStyles.ts";

import LoadingIcon from "../../assets/icons/svg/animated/loading.svg?react";



const GameFi = () => {
    const { themeContext, switchTheme } = useContext(HonoraisContext);
    const ref = useRef(null);
    return (
        <>
          <GameFiMain current_theme={themeContext.theme}>
            <Banner current_theme={themeContext.theme}>
                <h1>GAMIFICATION</h1>
            </Banner>
            <div className="gamefi-content-container">
              <div className="gamefi-header-description">
                <p className="description">
                  The HonOrais will <strong>revolutionize</strong> the gamefi ecosystem on ORAI by bringing the first AI based game.
                  <br/>
                  <strong>Choose</strong> your faction and battle epic and unique stories to gain your honor amongs the ranks of the HonOrai clan!
                </p>
              </div>
              <div className="wip">
                <h1>PATIENCE IS KEY.</h1>
                <LoadingIcon/>
                <p id="tools-icon">🛠️</p>
              </div>
            </div>
          </GameFiMain>
        </>
        )
}

export default GameFi;
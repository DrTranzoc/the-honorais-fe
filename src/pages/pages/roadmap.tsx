/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import { useContext, useRef } from "react";
import { HonoraisContext } from "../../App.tsx";
import { RoadmapMain , Banner} from "./styles/roadmapStyles.ts"

import LoadingIcon from "../../assets/icons/svg/animated/loading.svg?react";


const Roadmap = () => {
    const { themeContext, switchTheme } = useContext(HonoraisContext);
    const ref = useRef(null);
    return (
        <>
          <RoadmapMain current_theme={themeContext.theme}>
            <Banner current_theme={themeContext.theme}>
                <h1>ROADMAP</h1>
            </Banner>
            <div className="roadmap-content-container">
              <div className="wip">
                <h1>PATIENCE IS KEY</h1>
                <LoadingIcon/>
                <h1 id="tools-icon">🛠️</h1>
              </div>
            </div>
          </RoadmapMain>
        </>
        )
}

export default Roadmap;
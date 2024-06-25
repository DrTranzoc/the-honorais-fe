/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import React, { useContext, useEffect, useState } from "react";
import {
  NavBarMain,
  SearchBar,
  SearchDiv,
  NavLink,
  WalletButton,
  NavBarExpanded,
  MainContainer,
} from "./NavBarStyled";
import { HonoraisContext } from "../../App";

//icons
import light_theme_icon from "../../assets/icons/png/light-theme-icon.png";
import dark_theme_icon from "../../assets/icons/png/dark-theme-icon.png";
import HonOrai from "../../assets/icons/svg/honorai-logo.svg?react";
import MenuMobile from "../../assets/icons/svg/mobile-menu-bars.svg?react";
import CloseMenuMobile from "../../assets/icons/svg/mobile-menu-close.svg?react";
import RoadmapIcon from "../../assets/icons/svg/road-map-icon.svg?react";
import NavDiscoverIcon from "../../assets/icons/svg/nav-discover.svg?react";
import NavJoystickIcon from "../../assets/icons/svg/joystick-svgrepo-com.svg?react";
import UserProfileIcon from "../../assets/icons/svg/user-icon.svg?react";

const NavBar = () => {
  const { themeContext, switchTheme } = useContext(HonoraisContext);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded((prev) => {
      return !prev;
    });
  };

  const checkMobile = () => {
    if (window.innerWidth > 820) {
      setIsMenuExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
  });

  const navLinks = [
    {
      path: "Team",
      icon: <UserProfileIcon style={{width:"16px" , height:"16px"}}></UserProfileIcon>,
    },
    {
      path: "Lore",
      icon: <NavDiscoverIcon ></NavDiscoverIcon>,
    },
    {
      path: "GameFi",
      icon: <NavJoystickIcon style={{width:"16px" , height:"16px"}}></NavJoystickIcon>,
    },
    {
      path: "Roadmap",
      icon: <RoadmapIcon style={{width:"16px" , height:"16px"}}></RoadmapIcon>,
    }
  ];

  return (
    <MainContainer current_theme={themeContext.theme}>
      <NavBarMain
        current_theme={themeContext.theme}
        menu_expanded={isMenuExpanded.toString()}
      >
        <div className="nav-left">
          {!isMenuExpanded ? (
            <MenuMobile id="mobile-nav-icon" onClick={toggleMenu}></MenuMobile>
          ) : (
            <CloseMenuMobile
              id="mobile-nav-icon"
              onClick={toggleMenu}
            ></CloseMenuMobile>
          )}
          <HonOrai
            id="hr-logo"
            onClick={() => (window.location.href = "/home")}
          ></HonOrai>
          <a id="honorais" href="/home">
            Hon
          </a>
        </div>
        <div className="nav-center">
          {navLinks.map((val, idx) => {
            return (
              <>
                <div key={`menu-link-${idx}`} className="nav-link-block">
                  {val.icon}
                  <NavLink
                    href={`/${val.path.toLowerCase().replace(" ", "")}`}
                    current_theme={themeContext.theme}
                  >
                    {val.path}
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
        <div className="nav-right">
          {/* <a id="usr-profile" href={`/personal-area`}>
            <UserProfileIcon></UserProfileIcon>
          </a> */}
          <img
            src={
              themeContext.theme === "dark" ? dark_theme_icon : light_theme_icon
            }
            onClick={() => switchTheme()}
          ></img>
        </div>
      </NavBarMain>
      {isMenuExpanded ? (
        <NavBarExpanded current_theme={themeContext.theme}>
          {navLinks.map((val, idx) => {
            return (
              <>
                <div
                  key={`responsive-menu-link-${idx}`}
                  className="nav-link-block"
                >
                  {val.icon}
                  <NavLink
                    href={`/${val.path.toLowerCase()}`}
                    current_theme={themeContext.theme}
                  >
                    {val.path}
                  </NavLink>
                </div>
              </>
            );
          })}
        </NavBarExpanded>
      ) : null}
    </MainContainer>
  );
};

export default NavBar;

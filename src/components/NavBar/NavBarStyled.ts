import styled from "styled-components";
import {
  accent_palette,
  themesPalette,
  ThemesPalette,
} from "../../theme_config";
import "../../customFonts.css";

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

type ThemePropsExtended = {
  current_theme?: keyof ThemesPalette;
  menu_expanded?: string;
};

const MainContainer = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  & .user-profile-icon {
    width : 24px;
    height : 24px;
    fill : white;
    cursor: pointer;
    & path {
      fill : ${(props) => themesPalette[props.current_theme].text["200"]};
    }
  }

  & .banner {
    background: linear-gradient(
      90deg,
      #0082fa02,
      #0082fa10,
      #0082fa15,
      #0082fa30
    );

    & .words {
      position: relative;
      animation: move-words 60s linear infinite;
      margin: 0;
      font-family: Geliat-light;
      color: ${(props) => themesPalette[props.current_theme].text["200"]};
      font-size: 14px;

      @keyframes move-words {
        0% {
          left: 100%;
        }
        100% {
          left: -100%;
        }
      }
    }
  }
`;

const NavBarMain = styled.div<ThemePropsExtended>`
  height: 85px;
  width: 100%;
  position: ${(props) => props.menu_expanded === "true" ? "fixed" : "relative"};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 10;
  & #honorais {
    display: ${(props) => (props.menu_expanded === "true" ? "none" : "flex")};
  }
  & .nav-link-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    & a {
      font-family: Gang-of-three !important;
      font-size : 1.5rem;
    }
    & svg {
      fill: ${(props) => themesPalette[props.current_theme!].text["300"]};
      width: 28px !important;
      height: 28px !important;
      & path, g {
        width: 28px !important;
        height: 28px !important;
        fill: ${(props) => themesPalette[props.current_theme!].text["300"]};
      }
    }
  }
  & .nav-left {
    position: absolute;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 15px;
    margin: 16px;
    & a {
      font-size: 2rem;
      color: ${(props) => themesPalette[props.current_theme!].text["200"]};
      font-family: Gang-of-three;
      text-decoration: none;
      letter-spacing: 1px;
      cursor: pointer;
      &::after {
        content: "Orais";
        color: ${(props) => themesPalette[props.current_theme!].text["300"]};
      }

      @media screen and (max-width: 1440px) {
        font-size: 1.5rem;
      }
    }
    & #hr-logo {
      cursor: pointer;
      width : 48px;
      height : 48px;
      border-radius : 100%;
    }
    @media screen and (max-width: 820px) {
      width: 80%;
    }
    & #mobile-nav-icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: none;
      & g,
      path {
        fill: ${(props) => themesPalette[props.current_theme!].text["200"]};
        stroke: ${(props) => themesPalette[props.current_theme!].text["200"]};
      }
    }
    @media screen and (max-width: 820px) {
      & #mobile-nav-icon {
        display: flex;
      }
    }
  }
  & .nav-center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 30px;
    & #search-action-icon {
      width: 24px;
      height: 24px;
    }
    @media screen and (max-width: 1000px) {
      justify-content: center;
      gap: 18px;
      & svg {
        display: none;
      }
    }
    @media screen and (max-width: 820px) {
      display: none;
    }
  }

  & .nav-right {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15px;
    margin-right: 10px;
    & img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    & #usr-profile svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
      fill: ${(props) => themesPalette[props.current_theme!].text["200"]};
      & path,
      h {
        fill: ${(props) => themesPalette[props.current_theme!].text["200"]};
      }
    }
    @media screen and (max-width: 744px) {
      width: 50%;
    }
  }
`;

const SearchDiv = styled.div<ThemeProps>`
  display: flex;
  width: 25%;
  min-width: 150px;
  max-width: 390px;
  height: 25px;
  padding: 10px 16px 10px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: ${(props) => themesPalette[props.current_theme!].bg.Search};
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.current_theme === "dark"
      ? "none"
      : "0px -1px 2px rgb(160, 160, 160, 0.5)"};
  &#search-div-main {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  &#search-div-alt {
    display: none;
    @media screen and (max-width: 1000px) {
      display: flex;
    }
    @media screen and (max-height: 650px) {
      padding: 5px;
    }
  }
`;

const SearchBar = styled.input<ThemeProps>`
  width: 90%;
  height: 70%;
  background-color: ${(props) => themesPalette[props.current_theme!].bg.Search};
  color: ${(props) => themesPalette[props.current_theme!].text["500"]};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  border-radius: 8px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const NavLink = styled.a<ThemeProps>`
  text-decoration: none;
  color: ${(props) => themesPalette[props.current_theme!].text["200"]};
  font-weight: 600;
  transition: 80ms ease-in-out;
  &:hover {
    color: ${(props) => themesPalette[props.current_theme!].text["300"]};
  }
`;

const WalletButton = styled.div<ThemePropsExtended>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  min-width: 100px;
  height: 35px;
  cursor: pointer;
  background-color: ${(props) =>
    themesPalette[props.current_theme!].bg.Content};
  border-radius: 12px;
  border: 2px solid
    ${(props) => themesPalette[props.current_theme!].text["300"]};
  color: ${(props) => themesPalette[props.current_theme!].text["200"]};
  font-weight: bold;

  & .obscure-background {
    position: fixed;
    width: 200dvw;
    height: 200dvh;
    backdrop-filter: blur(5px);
    background-color: #29292920;
    cursor: default;
  }
  & .wallet-selection-div {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: max-content;
    border-radius: 15px;
    right: -300px;
    background-color: ${(props) =>
      themesPalette[props.current_theme!].bg.Content};
    border: 2px solid
      ${(props) => themesPalette[props.current_theme!].text["300"]};
    animation: menu-popup 0.25s linear;
    animation-fill-mode: forwards;
    padding: 30px;
    cursor: default;
    @media screen and (max-width: 820px) {
      transform: translate(-50%, -250%);
    }
    @media screen and (max-width: 820px) and (max-height : 800px) {
      transform: translate(-50%, -150%);
    }
    & .exit-wallet-submenu {
      width: max-content;
      height: max-content;
      position: absolute;
      top: 10px;
      left: 10px;
      cursor: pointer;
      & svg {
        width: 24px;
        height: 24px;
        fill: ${(props) => themesPalette[props.current_theme!].text["200"]};
        & path,
        g {
          fill: ${(props) => themesPalette[props.current_theme!].text["200"]};
        }
      }
    }
    & h1 {
      font-size: 1.5rem;
    }
    & .wallet-type-div {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: left;
      align-items: center;

      gap: 8px;
      & .wallet-label {
        &:hover {
          color: ${(props) => themesPalette[props.current_theme!].text["300"]};
          cursor: pointer;
        }
      }
      & svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  @keyframes menu-popup {
    0% {
      top: -50%;
    }
    100% {
      top: 50%;
    }
  }

  @media screen and (max-width: 820px) {
    display: ${(props) => (props.menu_expanded === "true" ? "flex" : "none")};
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.2rem;
    padding: 4px 8px;
  }
  & .wallet-placeholder {
    &:hover {
      color: ${(props) => themesPalette[props.current_theme!].text["300"]};
    }
  }
`;

const NavBarExpanded = styled.div<ThemeProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50dvh;
  background-color: ${(props) => themesPalette[props.current_theme!].bg.Main};
  z-index: 9;
  animation: rollupAnimation 0.08s linear;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  font-size: 1.75rem;
  & .nav-link-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-left: 40px;
    & svg {
      width: 32px !important;
      height: 32px !important;
      margin-top: 4px;
      fill: ${(props) => themesPalette[props.current_theme!].text["300"]};
      & path, g {
        width: 32px !important;
        height: 32px !important;
        fill: ${(props) => themesPalette[props.current_theme!].text["300"]};
      }
    }
    & a {
      font-family: Gang-of-three !important;
      font-size: 2rem;
    }
  }
  & a {
    font-family: "Geliat-bold";
  }
  @keyframes rollupAnimation {
    0% {
      height: 50dvh;
    }
    100% {
      height: 100dvh;
    }
  }
`;

export {
  MainContainer,
  NavBarMain,
  SearchBar,
  SearchDiv,
  NavLink,
  WalletButton,
  NavBarExpanded,
};

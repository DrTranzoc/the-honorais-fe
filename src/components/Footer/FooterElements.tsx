import { themesPalette , ThemesPalette } from "../../theme_config"

import styled from 'styled-components';
import '../../customFonts.css'


type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const Main_Footer = styled.div<ThemeProps>`
  display : grid;
  grid-template-columns : 30% 40% 30%;
  color: ${(props) => themesPalette[props.current_theme!].text["500"]};
  background-color: ${(props) => themesPalette[props.current_theme!].bg.Main};
  height : 90px;
  width : 100%;
  margin-top : auto;
  bottom: 0;
  width: 100%;
  z-index : 8;
  & .footer-logo {
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 10px;
    margin-left : 80px;
    & svg {
      width : 32px;
      height : 32px;
      border-radius : 100%;
    }
  }
  @media screen and (max-width: 600px){
    grid-template-columns : 80% 20%;
    & #details {
        display : none;
    } 
  }
`;

const SocialIcon = styled.div<ThemeProps>`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius : 10px;
    cursor : pointer;
    & svg , path {
      width: 20px;
      height: 20px;
      fill : ${(props) => themesPalette[props.current_theme!].text["200"]};
    }
`;

const FooterRow = styled.div<ThemeProps>`
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 30px;
    & a {
      color: ${(props) => themesPalette[props.current_theme!].text["500"]};
      font-family: "Plus Jakarta Sans";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
      text-decoration : none;
      &:hover {
        color: ${(props) => themesPalette[props.current_theme!].text["300"]};
      }
    }
    & p {
      color: ${(props) => themesPalette[props.current_theme!].text["500"]};
      font-family: "Plus Jakarta Sans";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    }
    @media screen and (max-width: 1000px){
      gap : 10px;
    }
    @media screen and (max-width: 600px){
      gap : 10px;
      & p {
        margin-left : 20px;
        font-size : 0.65rem;
      }
    }
`;

export { Main_Footer , FooterRow , SocialIcon}
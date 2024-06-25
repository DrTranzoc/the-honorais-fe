import { themesPalette , ThemesPalette } from "../../../theme_config"

import styled from 'styled-components';
import '../../../customFonts.css'

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const LoreMain = styled.div<ThemeProps>`
    width : 100%;
    min-height : 100dvh;
    overflow: hidden;
    position: relative;
    display : flex;
    flex-direction : column;
    & h1{
      font-size : 3.5rem;
        font-family : Gang-of-three;
        color : ${props => themesPalette[props.current_theme].text["300"]};
    }
    & .link {
        color : ${props => themesPalette[props.current_theme].text["300"]};
        text-decoration : underline;
        cursor: pointer;
        &:hover {
            font-weight : bold;
        }
    }
    & .lore-content-page {
      height : 100%;
      display : flex;
      justify-content : center;
      align-items : center;
      position : relative;
      & #background {
          width : calc(100% + 100px);
          height : 100%;
          position : absolute;
          top : 0;
          left : 0;
          background : linear-gradient(
              #000000,
              #ff185050,
              #463333,
              #72507b,
              #451c1c60,
              #451c1c95,
              #262525
          );
          z-index : -3;
      }
      & #lore-mountain {
        & img {
          position : absolute;
          bottom : -180px;
          left : 0;
        }
      }
      & #lore-tree {
        position : absolute;
        top : 0;
        left : 0;
        transition : 300ms ease-in-out;
      }
      & .next-icon , .previous-icon {
        position : absolute;
        top : 50%;
        right : 20px;
        width : 50px;
        height : 50px;
        fill : ${props => themesPalette[props.current_theme].text["300"]};
        transform : rotate(180deg);
        cursor: pointer;
        &:hover {
          scale: calc(1.2)
        }
      }
      & .previous-icon {
        transform : unset;
        left : 20px;
        right : unset;
      }
      & p {
        font-size : 2rem;
        font-weight: bold;
        color : ${props => themesPalette[props.current_theme].text["200"]};
      }
      & .parallax-text {
        width : 100%;
        height : 100%;
        display : flex;
        justify-content : center;
        align-items : center;
        & .text-container {
          width : 60%;
          height : max-content;
          max-height : 450px;
          overflow-y: auto;
          display : flex;
          flex-direction : column;
          position : relative;
          z-index : 100;
          padding : 20px 60px 20px 60px;
          -webkit-mask-image: 
              linear-gradient(
                90deg,
                transparent,
                white 3%,
                white 97%,
                transparent
              );

          mask: 
              linear-gradient(
                90deg,
                transparent,
                white 3%,
                white 97%,
                transparent
              );
          border-radius : 20px;
          backdrop-filter: blur(15px);
          background-color : ${props => themesPalette[props.current_theme].bg.Content + "40"};
          z-index : 0;
          &::-webkit-scrollbar {
            width: 2px;
            background-color: #535353; 
          }
          & p, h1 {
            z-index : 1;
            margin-block-end : 0rem;
            margin-block-start : 0rem;
            text-align:justify;
            word-break:keep-all;
          }
        }
      }
      @media screen and (max-width: 1000px){
        & p {
          font-size : 1.8rem;
        }
        & #lore-tree {
          left : -200px;
        }
      }
      @media screen and (max-width: 744px){
        & p {
          font-size : 1.5rem;
        }
        & h1 {
          font-size : 2.2rem;
        }
        & #lore-tree {
          left : -300px;
        }
        & #lore-mountain img{
          height : 85%;
        }
        & #clouds img{
          height : 85%;
          position : absolute;
        }
        & #moon img{
          height : 70%;
        }
        & .text-container {
          width : 80%;
        }
        & .next-icon , .previous-icon {
          top : unset;
          bottom : 10px;
        }
      }
      @media screen and (max-width: 500px){
        & #lore-tree {
          left : -650px;
        }
      }
    }
`;

const Banner = styled.div<ThemeProps>`
  width : 100%;
  height : 100px;
  background: ${props => themesPalette[props.current_theme].bg.Main};
  display : flex;
  justify-content : center;
  align-items : center;
  & h1 {
    font-size : 3rem;
  }
`


export { LoreMain , Banner };
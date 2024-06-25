import { themesPalette , ThemesPalette } from "../../../theme_config"

import styled from 'styled-components';
import '../../../customFonts.css'

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const GameFiMain = styled.div<ThemeProps>`
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
    & .gamefi-content-container {
        width : 100%;
        height : 100%;
        display : flex;
        align-items : center;
        flex-direction : column;
        & .gamefi-header-description {
          width : 60%;
          height : 300px;
          display : flex;
          align-items : center;
          justify-content: center;
          & .description {
            font-size : 1.5rem;
            color : ${props => themesPalette[props.current_theme].text["200"]};
          }
        }
        & .wip {
          width : max-content;
          height : max-content;
          display : flex;
          align-items : center;
          justify-content : center;
          gap : 5px;
          & h1 {
            text-shadow : 3px 3px 8px ${props => themesPalette[props.current_theme].text["200"] + "50"};
          }
          & #tools-icon {
            font-size : 3rem;
          }
          & svg {
            width : 5rem;
            height : 5rem;
            & circle {
              fill : ${props => themesPalette[props.current_theme].text["300"]};
            }
          }
        }
    }
    @media screen and (max-width: 744px){
      & h1 {
        font-size : 1.8rem;
      }
      & .gamefi-content-container {
        & .gamefi-header-description {
          width : 90%;
        }
        & .wip {
          flex-direction : column;
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

export { GameFiMain , Banner};
import { themesPalette , ThemesPalette } from "../../../theme_config"

import styled from 'styled-components';
import '../../../customFonts.css'

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const TeamMain = styled.div<ThemeProps>`
    width : 100%;
    min-height : 100dvh;
    overflow: hidden;
    position: relative;
    & h1{
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
`;

const Banner = styled.div<ThemeProps>`
  width : 100%;
  height : 200px;
  background: ${props => themesPalette[props.current_theme].bg.Main};
  display : flex;
  justify-content : center;
  align-items : center;
  & h1 {
    font-size : 3rem;
  }
`

const TeamContent = styled.div<ThemeProps>`
  width : 100%;
  height : max-content;
  min-height : 500px;
  & .inner-team-container {
    width : 70%;
    height : max-content;
    border-radius : 15px;
    margin : 100px auto;
    & p {
      text-align:justify;
      word-break:keep-all;
      color : ${props => themesPalette[props.current_theme].text["200"]};
      font-size : 1.8rem;
    }
  }
  & .team-member-container {
    width : 50%;
    margin : 100px auto;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap : 5px;
    background-color : ${props => themesPalette[props.current_theme].bg.Main};
    padding : 25px;
    border-radius : 20px;
    & .team-member-name {
      font-size : 2.5rem;
      margin-block-end : 0.1rem;
      margin-block-start : 0.1rem;
    }
    & .team-member-title {
      font-size : 1.5rem;
      color : ${props => themesPalette[props.current_theme].text["200"]};
      margin-block-end : 0.1rem;
      margin-block-start : 0.1rem;
    }
    & .team-member-socials {
      display : flex;
      align-items : center;
      gap : 10px;
      color : ${props => themesPalette[props.current_theme].text["200"]};
      margin-block : 10px;
      & svg {
        cursor: pointer;
        width : 30px;
        height : 30px;
        fill : ${props => themesPalette[props.current_theme].text["200"]};
        & path {
          fill : ${props => themesPalette[props.current_theme].text["200"]};
        }
        &:hover{
          & path {
            fill : ${props => themesPalette[props.current_theme].text["300"]};
          }
        }
      }
    }
    & .team-member-image {
      width : 300px;
      height : 300px;
      border-radius : 10px;
    }
    & .team-member-description {
      width : 80%;
      font-size : 1.5rem;
      color : ${props => themesPalette[props.current_theme].text["200"]};
    }
    @media screen and (max-width: 744px){
      width : 85%;
      & .team-member-description {
        width : 95%;
        font-size : 1.7rem;
      }
      & .team-member-image {
        width : 250px;
        height : 250px;
      }
    }
  }
`;

export { TeamMain , Banner , TeamContent}
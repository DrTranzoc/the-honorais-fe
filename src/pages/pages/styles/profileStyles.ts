import { themesPalette , ThemesPalette } from "../../../theme_config"

import styled from 'styled-components';
import '../../../customFonts.css'

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const ProfileMain = styled.div<ThemeProps>`
    width : 100%;
    min-height : 100dvh;
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
    & .loading {
      width : 100%;
      height : 100%;
      display : flex;
      justify-content : center;
      align-items : center;
      & svg {
        width : 128px;
        height : 128px;
        & path {
          fill : ${props => themesPalette[props.current_theme].text["300"]};
        }
      }
    }
`;

const ProfileArea = styled.div<ThemeProps>`
  width : 80%;
  height : max-content;
  min-height : 70dvh;
  margin : 10px auto;
  padding-bottom : 20px;
  border-radius : 20px;
  background-color : ${props => themesPalette[props.current_theme].bg.Main};
  display : flex;
  flex-direction : column;
  gap : 20px;
  align-items : center;
  & .user-details {
    width : 100%;
    display : flex;
    justify-content : center;
    gap : 10px;
    margin : auto;
    & .user-img {
      width : 200px;
      height : 200px;
      border-radius : 10px;
      margin-top : 20px;
      margin-left : 20px;
    }
    & .user-data {
      margin-top : 10px;
      display: flex;
      flex-direction : column;
      gap : 8px;
      & h1 {
        font-size : 1.35rem;
        color : ${props => themesPalette[props.current_theme].text["200"]};
        font-family : 'Geliat-bold';
        margin-block : 0px;
      }
      & p {
        font-size : 1.4rem;
        color : ${props => themesPalette[props.current_theme].text["200"]};
        font-family : 'Geliat-light';
        margin-block : 0px;
      }
      & .discord-area {
        width : max-content;
        height : max-content;
        display : flex;
        & p {
          color : ${props => themesPalette[props.current_theme].text["200"]};
        }
        & .connect-discord-button {
          width : max-content;
          height : max-content;
          padding : 10px;
          border-radius : 10px;
          outline : 2px solid ${props => themesPalette[props.current_theme].text["300"]};
          display : flex;
          justify-content : center;
          align-items : center;
          gap : 5px;
          cursor: pointer;
          &:hover {
            scale : calc(0.95);
            outline : 2px solid ${props => themesPalette[props.current_theme].text["200"]};
          }
          & svg {
            width : 24px;
            height : 24px;
            & path , g {
              fill : ${props => themesPalette[props.current_theme].text["200"]};
            }
          }
        }
        & .discord-user-info {
          display : flex;
          gap : 8px;
          justify-content : center;
          align-items : center;
          & p {
            font-size : 1.3rem;
          }
          & .discord-img {
            width : 30px;
            height : 30px;
            border-radius : 50%;
          }
          & svg {
            width : 24px;
            height : 24px;
            cursor: pointer;
            fill : ${props => themesPalette[props.current_theme].text["200"]};
            & path {
              fill : ${props => themesPalette[props.current_theme].text["200"]};
            }
          }
        }
      }
    }
  }

  & .user-nfts {
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : max-content;
    width : max-content;
    & .header {
      width : 100%;
      height : 60px;
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
      display : flex;
      justify-content : space-between;
      align-items : center;
      gap : 10px;
      background-color : ${props => themesPalette[props.current_theme].bg.Main};
      z-index : 3;
      & .big-header {
        margin-left : 10px !important;
      }
      & .sort-option 
      {
        display : flex;
        justify-content : center;
        align-items : center;
        gap : 5px;
        margin-right : 10px !important;
        & .sort-by {
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        width : 100px;
        height : 40px;
        padding : 3px;
        outline : 1px solid ${props => themesPalette[props.current_theme].text["300"]};
        transition : 100ms ease-in-out;
        border-radius : 4px;
        cursor: pointer;
        &:hover {
          border-radius : 10px;
          outline : 1px solid ${props => themesPalette[props.current_theme].text["200"]};
        }
        & p {
          margin-block : 0.01rem;
          font-family : 'Geliat-bold';
          font-size : 1.2rem;
          color : ${props => themesPalette[props.current_theme].text["200"]};
        }
        & .label {
          font-family : 'Geliat-light';
          font-size : 0.9rem;
        }
        & .hidden-option {
          padding : 3px;
          position : absolute;
          top : 39px;
          width : 100px;
          height : max-content;
          display : flex;
          justify-content : center;
          align-items : center;
          flex-direction : column;
          z-index : 2;
          background-color : ${props => themesPalette[props.current_theme].bg.Main};
          border : 1px solid ${props => themesPalette[props.current_theme].text["300"]};
          border-top : unset;
          gap : 3px;
          margin-bottom : 5px;
          transition : 100ms ease-in-out;
          &:hover {
            border-bottom-left-radius : 10px;
            border-bottom-right-radius : 10px;
            border : 1px solid ${props => themesPalette[props.current_theme].text["200"]};
            border-top : unset;
          }
          & p {
            width : 100%;
            transition : 80ms ease-in-out;
            text-align : center;
            font-size : 1rem;
            &:hover {
              background-color : ${props => themesPalette[props.current_theme].text["300"]};
            }
          }
        }
        }
        & .sort-order {
          width : 55px;
          height : max-content;
          text-align : center;
          & p {
            margin-block : 0.01rem;
            font-family : 'Geliat-bold';
            font-size : 1.2rem;
            color : ${props => themesPalette[props.current_theme].text["200"]};
            cursor: pointer;
            &:hover {
              color : ${props => themesPalette[props.current_theme].text["300"]};
            }
          }
        }
      }
    }
    & .nft-datas {
      display : grid;
      grid-template-columns : repeat(4, max-content);
      gap : 10px;
      margin-top : 20px;
      z-index : 1;
      height : max-content;
      & .nft-card {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        padding : 10px;
        background-color : ${props => themesPalette[props.current_theme].bg.Content};
        border-radius : 10px;
        gap : 5px;
        cursor: pointer;
        transition : 200ms ease-in-out;
        outline : 2px solid #29292930;
        &:hover {
          outline : 2px solid ${props => themesPalette[props.current_theme].text["300"]};
          scale : calc(0.95);
          & img {
            box-shadow : unset;
          }
        }
        & img {
          width : 256px;
          height : 256px;
          border-radius : 5px;
          box-shadow : 3px 3px 8px black;
        }
        & h1 {
          font-size : 1.35rem;
          color : ${props => themesPalette[props.current_theme].text["200"]};
          font-family : 'Geliat-bold';
          margin-block : 0.05rem;
        }
        & .nft-stats {
          display : grid;
          grid-template-columns : repeat(2 , max-content);
          width : 100%;
          justify-content : center;
          gap : 5px;
          & p {
            font-size : 1rem;
            border-radius : 10px;
            padding : 8px;
            text-align : center;
            background-color : ${props => props.current_theme == "dark" ? "#808080" : "#292929"};
            color : ${props => props.current_theme == "dark" ? "#101010" : "white"};
            font-family : 'Geliat-light';
            font-weight : bold;
          }
          & .active-sort {
            border : 2px solid ${props => themesPalette[props.current_theme].text["300"]};
            font-family : 'Geliat-bold';
            
          }
        }
      }
      @media screen and (max-width : 1440px){
        grid-template-columns : repeat(3, max-content);
      }
      @media screen and (max-width : 1100px){
        grid-template-columns : repeat(2, max-content);
      }
      @media screen and (max-width : 744px){
        grid-template-columns : repeat(1, max-content);
        & img {
          width : 300px !important;
          height : 300px !important;
        }
      }
    }
  }

  & .big-header {
    height : max-content;
    width : max-content;
    & h1 {
      font-size : 2rem !important;
      margin-block : 2.5px;
      color : ${props => themesPalette[props.current_theme].text["200"]};
      font-family : 'Geliat-bold';
    }
    & .underline {
      width : 100%;
      height : 5px;
      background-color : ${props => themesPalette[props.current_theme].text["300"]};
    }
  }

  @media screen and (max-width : 1200px){
    align-items : center;

    & .user-details {
      flex-direction : column;
      align-items : center;
      & .user-img {
        margin-left : 0;
      }
      & .user-data {
        align-items : center;
        & h1 {
          font-size : 1.3rem;
        }
      }
    }
  }
  @media screen and (max-width : 744px){
    width : 95%;
    & .user-details {
      & .user-img {
        width : 250px;
        height : 250px;
      }
      & .user-data {
        & h1 {
          font-size : 1.2rem;
        }
      }
    }
  }
  @media screen and (max-width : 500px){
    & .user-details {
      & .user-img {
        width : 200px;
        height : 200px;
      }
      & .user-data {
        & h1 {
          font-size : 0.78rem;
        }
      }
    }
    & .big-header {
      & h1 {
        font-size : 1.5rem !important;
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

export { ProfileMain , Banner , ProfileArea};
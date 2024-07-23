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

const NFTExpanded = styled.div<ThemeProps>`
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    position : fixed;
    backdrop-filter: blur(15px);
    z-index : 11;
    overflow : auto;
    & .nft-div {
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        width : 500px;
        height : max-content;
        padding : 10px;
        background-color : ${props => themesPalette[props.current_theme].bg.Content};
        border : 4px solid ${props => themesPalette[props.current_theme].text["200"]};
        border-radius : 10px;
        margin : 70px auto;
        gap : 20px;
        position : relative;
        transition : 80ms ease-in-out;
        & img {
            width : 380px;
            height : 380px;
            border-radius : 10px;
            border : 2px solid ${props => themesPalette[props.current_theme].text["200"]};
        }
        & h1 {
            font-size : 3rem;
            font-family : 'Geliat-bold';
            color : ${props => themesPalette[props.current_theme].text["200"]};
            margin-block : 0;
        }
        & .nft-stats {
            display : flex;
            justify-content : center;
            align-items : center;
            gap : 3px;
            & .stat {
                font-family : 'Geliat-bold';
                color : ${props => themesPalette[props.current_theme].text["200"]};
                padding : 10px;
                border-radius : 10px;
                background-color : ${props => themesPalette[props.current_theme].text["300"]};
                font-size : 1rem;
            }
        }
        & .nft-option {
            width : 100%;
            display : flex;
            justify-content : center;
            align-items : center;
            gap : 10px;
            margin-bottom : 20px;
            & .default-action-button {
                padding : 20px;
                border-radius : 8px;
                background-color : ${props => themesPalette[props.current_theme].text["300"]};
                font-family : 'Geliat-bold';
                color : ${props => themesPalette[props.current_theme].text["200"]};
                cursor: pointer;
                transition : 100ms ease-in-out;
                &:hover {
                    scale : calc(0.9)
                }
            }
        }
        & svg {
            width : 48px;
            height : 48px;
            position : absolute;
            top : 10px;
            right : 10px;
            cursor: pointer;
            & path {
                transition : 200ms ease-in-out;
                fill : ${props => themesPalette[props.current_theme].text["200"]};
            }
            &:hover {
                & path {
                    fill : ${props => themesPalette[props.current_theme].text["300"]};
                }
            }
        }
    }

    @media screen and (max-width : 1440px){
        & .nft-div {
            width : 400px;
            & img {
                width : 350px;
                height : 350px;
            }
        }
    }

    @media screen and (max-height : 820px){
        & .nft-div {
            width : 500px;
            & img {
                width : 300px;
                height : 300px;
            }
        }
    }

    @media screen and (max-height : 600px){
        & .nft-div {
            border : none;
            width : calc(100%);
            & img {
                width : 300px;
                height : 300px;
            }
            & h1 {
                font-size : 2rem;
            }
        }
    }

    @media screen and (max-width : 850px){
        & .nft-div {
            width : 500px;
            & img {
                width : 300px;
                height : 300px;
            }
        }
    }

    @media screen and (max-width : 560px){
        & .nft-div {
            border : none;
            margin-top : 120px;
            width : 100%;
            padding-inline : 0;
            & img {
                width : 300px;
                height : 300px;
            }
            & h1 {
                font-size : 2rem;
            }
            & svg {
                width : 35px;
                height : 35px;
            }
        }
    }
`;

export { NFTExpanded };
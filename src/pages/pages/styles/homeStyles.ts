import { themesPalette , ThemesPalette } from "../../../theme_config"

import styled from 'styled-components';
import '../../../customFonts.css'

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const HomeMain = styled.div<ThemeProps>`
    width : 100%;
    min-height : 100dvh;
    overflow: hidden;
    position: relative;

    & h1{
        font-family : Gang-of-three;
        color : ${props => themesPalette[props.current_theme].text["300"]};
    }
    & .first-page {
        width : 100dvw;
        height : 100vh;
        position : relative;
        overflow : hidden;
        & .parallax-background {
            width : 100%;
            overflow: hidden;
        & img {
            width : 100%;
            position : absolute;
            top : 0;
            left : 0;
            overflow: hidden;
            transition : 500ms ease-out;
        }
        & #background {
            width : 100%;
            height : 100%;
            position : absolute;
            top : 0;
            left : 0;
            background : linear-gradient(
                #000000,
                #2e2424,
                #451c1c,
                #262525
            );
        }
        & #tree {
            width: unset;
            height : 100%;
            bottom : 0;
            top : unset;
        }
        & #banner-title {
            position : absolute;
            top : 10%;
            left : 45%;
            font-size : 6rem;
            color : #b30c0c;
            transition : 300ms ease-out;
            text-shadow: 
                1px 1px 0 white, 
                -1px 1px 0 white, 
                1px -1px 0 white, 
                -1px -1px 0 white,
                1px 0 0 white,
                -1px 0 0 white,
                0 1px 0 white,
                0 -1px 0 white;
            z-index: 0;
            text-wrap: nowrap;
        }
        & #muntain {
            width: 100%;
            min-width : 1600px;
            bottom : 0;
            top : unset;
        }
        & #stars {
            width : unset;
            height : 100%;
            bottom : 0;
            top : unset;
            right : 0;
        }
        & #mascotte {
            width : unset;
            right : 0;
            bottom : 0;
            top : unset;
            left : unset;
            height : 82%;
        }
        & #clouds {
            width : 100%;
        }
        & #clouds-2 {
            width : 100%;
            top : 50%;
        }
        & #moon {
            min-width : 1000px;
        }
        & .parallax-class {
            overflow: hidden !important;
            height : max-content !important;
            &::-webkit-scrollbar {
                width: 0px !important;
            }
        }
        & .content-parallax {
            height : max-content !important;
        }
        }
    }

    & .link {
        color : ${props => themesPalette[props.current_theme].text["300"]};
        text-decoration : underline;
        cursor: pointer;
        &:hover {
            font-weight : bold;
        }
    }

    & .nft-gallery {
        width : 100%;
        height : max-content;
        display : flex;
        justify-content : center;
        align-items : center;
        & #gallery-nft {
            display : flex;
            justify-content : center;
            align-items : center;
            & img {
                width : 256px;
                height : 256px;
                border-radius : 8px;
                box-shadow : 3px 3px 20px ${props => themesPalette[props.current_theme].text["200"]};
                transition : 400ms ease-in-out;
            }
            & #right-nft {
                margin-left : 20px;
            }
            & #left-nft {
                margin-right : 20px;
            }
        }
        & .gallery-middle-text {
            max-width : 600px;
            transition : 1000ms ease-in-out;
            font-size : 3rem;
            text-align : center;
        }
    }
    
    & .page-text-container {
        color : white;
        width : 50%;
        font-size : 1.8rem;
        margin : auto;
        transition: 350ms ease-in-out;
        margin-top: 125px;
        margin-bottom : 125px;
        color : ${props => themesPalette[props.current_theme].text["200"]};
        padding : 10px;
        & p {
            text-align:justify;
            word-break:keep-all;
        }
        & .text-image {
            width : 280px;
            float : left;
            margin : 15px 15px 0 0;
            border-radius : 10px;
            @media screen and (max-width : 700px){
                margin : unset;
            }
        }
        & .text-image-right {
            width : 300px;
            float : right;
            margin : 15px 0 0 15px;
            border-radius : 10px;
            @media screen and (max-width : 700px){
                margin : unset;
            }
        }
    }

    & .orai {
            width : 100%;
            height : 350px;
            display : flex;
            justify-content : center;
            align-items : center;
            & svg {
                height : 300px;
                width : 600px;
                fill : ${props => themesPalette[props.current_theme].text["200"]};
                cursor: pointer;
                &:hover {
                    scale : calc(0.95);
                }
                & path {
                    fill : ${props => themesPalette[props.current_theme].text["200"]};
                }
            }
        }
    @media screen and (max-width: 1644px){
            & #mascotte {
                height : 80% !important;
            }
            & #banner-title {
                font-size : 5rem !important;
                top : 1% !important;
                left : 45% !important;
            }
        }
        @media screen and (max-width: 1300px){
            & #tree {
                left : -300px;
            }
            & #clouds {
                top : 200px;
            }
            & #moon {
                right : 0;
                left : unset;
            }
            & #mascotte {
                height : 75% !important;
            }
            & .page-text-container {
                width : 70%;
                font-size : 1.5rem;
            }
            & #banner-title {
                font-size : 4rem;
            }
            & #banner-title {
                left : 40% !important;
                z-index: 1 !important;
            }

            & .nft-gallery {
                & #gallery-nft {
                    & img {
                        width : 180px;
                        height : 180px;
                    }
                    & #right-nft {
                        margin-left : 10px;
                    }
                    & #left-nft {
                        margin-right : 10px;
                    }
                }
                & .gallery-middle-text {
                    font-size : 2rem;
                    max-width : 500px;
                }
            }
        }
        @media screen and (max-width: 950px){
            & #mascotte {
                height : 70% !important;
            }
            & #banner-title {
                height : max-content;
                font-size : 4rem !important;
                left : 50% !important;
                transform: translate(-50%) !important;
            }
        }
        @media screen and (max-width: 744px){
            & #tree {
                left : -600px;
            }
            & #muntain {
                left : -500px;
            }
            & #mascotte {
                height : 68% !important;
            }
            & .page-text-container {
                display : flex;
                justify-content : center;
                align-items : center;
                flex-direction : column;
                width : 85%;
                & .text-image {
                    float : unset;
                    width : 320px;
                    height: 320px;
                }
                & .text-image-right {
                    float : unset;
                    width : 320px;
                    height: 320px;
                }
                & p {
                    font-size : 1.45rem;
                    text-align:left;
                }
            }
            & #banner-title {
                height : max-content;
                font-size : 4rem !important;
                left : 50% !important;
                transform: translate(-50%) !important;
            }
            & .nft-gallery {
                flex-direction : column;
                & .gallery-middle-text {
                    max-width : 340px;
                }
            }
            & .orai svg {
                width : 340px;
            }
            
        }
        @media screen and (max-width: 500px){
            & #tree {
                left : -600px;
            }
            & #muntain {
                left : -600px;
            }
            & #mascotte {
                height : 60% !important;
            }
            & #banner-title {
                font-size : 3rem !important;
            }
        }


`;

export { HomeMain }
import styled from "styled-components";
import { themesPalette, ThemesPalette } from "../../../theme_config";
import "../../../customFonts.css";

type ThemeProps = {
  current_theme?: keyof ThemesPalette;
};

const RootLayout = styled.div<ThemeProps>`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100dvh !important;
  height: max-content !important;
  grid-template-rows: 85px auto 90px;
  background-color: ${(props) => themesPalette[props.current_theme!].bg.Base};
  overflow: hidden;
  p , a{
    margin-block-start: 0.15rem;
    margin-block-end: 0.15rem;
  }
`;

export { RootLayout };

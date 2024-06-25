interface Theme {
  text: { [key: string]: string };
  bg: { [key: string]: string };
  stroke?: { [key: string]: string };
}

export interface ThemesPalette {
  light: Theme;
  dark: Theme;
}

export const themesPalette: ThemesPalette = {
  light: {
    text: {
      "100": "#000000",
      "200": "#11324D",
      "300": "#3440F1",
      "400": "#6C7A85",
      "500": "#6C7A85",
    },
    bg: {
      Main: "#F4FAFF",
      Card_Buttons: "#3440F1",
      Menu: "#E6E4DD",
      Content: "#F4FAFF",
      Search: "#ffffff",
      Base: "#ffffff",
      StatDark: "#E9E9E9",
      StatLight: "#ffffff",
    },
    stroke: {
      Primary: "#806453",
      Secondary: "#F1EOF9",
      Shadow: "#bdbdbd50",
    },
  },
  dark: {
    text: {
      "100": "#FFFFFF",
      "200": "#F1EFE9",
      "300": "#b30c0c",
      "400": "#A3A096",
      "500": "#7A7A7A",
    },
    bg: {
      Main: "#101010",
      Card_Buttons: "#01BDCA",
      Menu: "#121212",
      Content: "#313131",
      Search: "#111111",
      Base: "#070707",
      StatDark: "#1f2027",
      StatLight: "#343642",
    },
    stroke: {
      Primary: "#806453",
      Secondary: "#F1EOF9",
      Shadow: "#bdbdbd50",
    },
  },
};

export const accent_palette = {
  Primary: "#1663DD",
  Secondary: "#b30c0c",
  Icons: "#858585",
  Accent_Pressed: "#E8E7E7",
  Primary_Hover: "#FFA065",
};

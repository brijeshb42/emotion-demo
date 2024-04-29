import type { CSSObject } from "@emotion/css";

interface CustomTheme {
  typography: {
    h1: CSSObject;
    h2: CSSObject;
    h3: CSSObject;
    h4: CSSObject;
    h5: CSSObject;
    h6: CSSObject;
    button: CSSObject;
    subtitle: CSSObject;
    body1: CSSObject;
    body2: CSSObject;
    caption: CSSObject;
    overline: CSSObject;
    inherit: CSSObject;
    fontFamily: string;
    fontWeightRegular: string;
    fontWeightMedium: string;
    fontWeightSemiBold: string;
    fontWeightBold: string;
    pxToRem(pixels: number): string;
    htmlFontSize: number;
    fontSize: number;
    allVariants: {
      scrollMarginTop: string;
    };
  };
  zIndex: {
    appBar: number;
  };
  palette: {
    primary: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    divider: string;
    text: {
      secondary: string;
      primary: string;
      disabled: string;
      icon: string;
    };
    background: {
      plain: string;
      lvl1: string;
      lvl2: string;
    };
    common: {
      black: string;
      white: string;
    };
  };
  mixins: Recors<string, CSSObject>;
  shape: Shape;
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {
    vars: CustomTheme;
    applyStyles: (
      colorScheme: string,
      style: CSSObject
    ) => Record<string, CSSObject>;
    spacing: (space: number) => number | string;
  }
}

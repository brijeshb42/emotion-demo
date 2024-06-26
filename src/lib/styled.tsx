"use client";
import { css as baseCss } from "@emotion/css";
import { Theme } from "@emotion/react";
import { Element, RULESET } from "stylis";

import createBreakpoints from "./createBreakpoints";

type BaseCssArg = Parameters<typeof baseCss>;
type CssArg =
  | BaseCssArg[number]
  | ((themeArgs: { theme: Theme }) => BaseCssArg[number]);

const greyPalette = {
  50: "hsl(220, 60%, 97%)",
  100: "hsl(220, 35%, 93%)",
  200: "hsl(220, 35%, 88%)",
  300: "hsl(220, 25%, 82%)",
  400: "hsl(220, 20%, 76%)",
  500: "hsl(220, 20%, 64%)",
  600: "hsl(220, 25%, 44%)",
  700: "hsl(220, 25%, 32%)",
  800: "hsl(220, 25%, 16%)",
  900: "hsl(220, 30%, 8%)",
};
const fontFamily = `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;

const darkModeColorTokens = {
  primary: {
    light: "hsl(210, 100%, 65%)",
    main: "hsl(210, 100%, 45%)",
    dark: "hsl(210, 100%, 35%)",
    contrastText: "hsl(210, 100%, 97%)",
  },
  info: {
    light: "hsl(210, 98%, 42%)",
    main: "hsl(210, 100%, 35%)",
    dark: "hsl(210, 100%, 21%)",
    contrastText: "hsl(210, 100%, 65%)",
  },
  grey: greyPalette,
  divider: "hsla(220, 25%, 35%, 0.3)",
  background: {
    plain: "hsl(220, 20%, 2%)",
    lvl1: "hsl(220, 30%, 3%, 1)",
    lvl2: "hsl(220, 30%, 5%, 0.8)",
  },
  text: {
    primary: "hsl(220, 40%, 100%)",
    secondary: "hsl(220, 40%, 75%)",
    disabled: "rgba(255, 255, 255, 0.5)",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};

const lightModeColorTokens = {
  primary: {
    light: "hsl(210, 100%, 65%)",
    main: "hsl(210, 100%, 45%)",
    dark: "hsl(210, 100%, 35%)",
    contrastText: "hsl(210, 100%, 97%)",
  },
  info: {
    light: "hsl(210, 100%, 90%)",
    main: "hsl(210, 100%, 65%)",
    dark: "hsl(210, 98%, 55%)",
    contrastText: "hsl(220, 60%, 99%)",
  },
  grey: greyPalette,
  divider: "hsla(220, 25%, 80%, 0.6)",
  background: {
    plain: "white",
    lvl1: "hsl(220, 30%, 98%, 0.4)",
    lvl2: "hsl(220, 30%, 96%, 0.4)",
  },
  text: {
    primary: "hsl(220, 40%, 10%)",
    secondary: "hsl(220, 40%, 25%)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};

const baseTheme: Theme["vars"] = {
  typography: {
    pxToRem(val) {
      return `${val / 16}rem`;
    },
    fontFamily,
    allVariants: {
      scrollMarginTop: "calc(116px + 32px)",
    },
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemiBold: "600",
    fontWeightBold: "700",
    h1: {
      fontFamily: fontFamily,
      fontSize: "clamp(2.2rem, 1.125rem + 3.5vw, 3.5rem)",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: -0.2,
    },
    h2: {
      fontFamily: fontFamily,
      fontSize: "clamp(1.75rem, 1rem + 3vw, 3rem)",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: -0.2,
      color: "hsl(215, 15%, 92%)",
    },
    h3: {
      fontFamily: fontFamily,
      fontSize: "clamp(1.5rem, 1rem + 2.25vw, 2.25rem)",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: 0.2,
    },
    h4: {
      fontFamily: fontFamily,
      fontSize: "clamp(1.2rem, 1rem + 2.1vw, 2.1rem)",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0.2,
    },
    h5: {
      fontFamily: fontFamily,
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0.1,
    },
    h6: {
      fontFamily: fontFamily,
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      textTransform: "initial",
      fontWeight: 600,
      fontSize: "0.875rem",
      letterSpacing: 0,
      lineHeight: 1.75,
    },
    subtitle: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0,
      fontFamily: fontFamily,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: fontFamily,
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    caption: {
      fontFamily: fontFamily,
      fontSize: "0.75rem",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    overline: {
      fontFamily: fontFamily,
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit",
    },
  },
  palette: darkModeColorTokens,
  zIndex: {
    appBar: 1000,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px)": {
        "@media (orientation: landscape)": {
          minHeight: 48,
        },
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
};

export const theme: Theme = {
  vars: baseTheme,
  ...baseTheme,
  applyStyles(scheme, obj) {
    return {
      [`:where(.${scheme}) &`]: obj,
    };
  },
  spacing(space) {
    return space * 8;
  },
};

export const lightTheme: Theme = {
  ...theme,
  vars: {
    ...theme.vars,
    palette: lightModeColorTokens,
  },
  palette: lightModeColorTokens,
};

export const breakpoints = createBreakpoints({});

// A workaround to https://github.com/emotion-js/emotion/issues/2836
// to be able to use `:where` selector for styling.
export function globalSelector(element: Element) {
  switch (element.type) {
    case RULESET:
      element.props = (element.props as string[]).map((value: any) => {
        if (value.match(/(:where|:is)\(/)) {
          value = value.replace(/\.[^:]+(:where|:is)/, "$1");
          return value;
        }
        return value;
      });
  }
}

export { default as styled } from "@emotion/styled";

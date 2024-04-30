"use client";
import { ReactNode } from "react";
import { prefixer } from "stylis";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider as Tp } from "@emotion/react";
import { lightTheme, theme as darkTheme, globalSelector } from "./styled";

export function ThemeProvider({
  themeKey,
  children,
}: {
  themeKey?: string;
  children?: ReactNode;
}) {
  const theme = themeKey === "light" ? lightTheme : darkTheme;
  return (
    <AppRouterCacheProvider
      options={{ stylisPlugins: [prefixer, globalSelector] }}
    >
      <Tp theme={theme}>{children}</Tp>
    </AppRouterCacheProvider>
  );
}

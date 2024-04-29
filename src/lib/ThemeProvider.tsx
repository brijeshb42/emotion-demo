"use client";
import { ReactNode } from "react";
import { ThemeProvider as Tp } from "@emotion/react";
import { lightTheme, theme as darkTheme } from "./styled";

export function ThemeProvider({
  themeKey,
  children,
}: {
  themeKey?: string;
  children?: ReactNode;
}) {
  const theme = themeKey === "light" ? lightTheme : darkTheme;
  return <Tp theme={theme}>{children}</Tp>;
}

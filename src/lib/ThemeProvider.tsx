"use client";
import { ReactNode } from "react";
import { ThemeProvider as Tp } from "@emotion/react";
import { theme } from "./styled";

export function ThemeProvider({ children }: { children?: ReactNode }) {
  return <Tp theme={theme}>{children}</Tp>;
}

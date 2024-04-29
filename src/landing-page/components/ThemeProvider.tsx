"use client";

import { ReactNode } from "react";
import { ThemeProvider as BaseThemeProvider } from "@emotion/react";
import { theme } from "@/lib/styled";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export function ThemeProvider({ children }: { children?: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </AppRouterCacheProvider>
  );
}

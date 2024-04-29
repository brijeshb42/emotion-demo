import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@/lib/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pigment CSS Demo",
  description:
    "A demo that showcases how to style your app with Pigment CSS in multiple ways.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/lib/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emotion Demo",
  description:
    "A demo that showcases how to style your app with Pigment CSS in multiple ways.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const theme = cookies().get("theme")?.value || "dark";
  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>
        <ThemeProvider themeKey={theme}>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}

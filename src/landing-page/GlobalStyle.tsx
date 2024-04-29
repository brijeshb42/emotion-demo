"use client";

import { Global } from "@emotion/react";

export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => ({
        "strong, b": {
          fontWeight: theme.typography.fontWeightBold,
        },
        body: {
          body: theme.vars.palette.text.primary,
          backgroundColor: theme.vars.palette.background.plain,
        },
      })}
    />
  );
}

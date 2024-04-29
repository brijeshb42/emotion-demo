import React from "react";
import { styled } from "@/lib/styled";
import { Typography } from "./Typography";

export const LinkRoot = styled(
  Typography,
  {}
)(({ theme }) => ({
  position: "relative",
  color: theme.vars.palette.primary.main,
  textDecoration: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: 1,
    bottom: 0,
    left: 0,
    backgroundColor: theme.vars.palette.primary.light,
    opacity: 0.7,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover": {
    "&::before": {
      width: "100%",
      opacity: 1,
    },
  },
  ...theme.applyStyles("dark", {
    color: theme.vars.palette.primary.light,
  }),
}));

export function Link(props: any) {
  return <LinkRoot {...props} as="a" />;
}

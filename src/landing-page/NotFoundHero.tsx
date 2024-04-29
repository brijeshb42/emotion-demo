"use client";
import { breakpoints, styled } from "@/lib/styled";
import { Typography } from "./components/Typography";

const HeroWrapper = styled.section(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `radial-gradient(ellipse 100% 30% at 50% -20%, ${theme.vars.palette.primary.light}, transparent)`,
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage: `radial-gradient(ellipse 100% 40% at 50% -20%, ${theme.vars.palette.primary.dark}, transparent)`,
  }),
}));

export function NotFoundHero() {
  return (
    <HeroWrapper
      id="hero"
      css={{
        paddingTop: 12 * 8,
        paddingBottom: 4 * 8,
        [breakpoints.up("sm")]: {
          paddingTop: 20 * 8,
          paddingBottom: 12 * 8,
        },
      }}
    >
      <div
        css={{
          boxSizing: "border-box",
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2 * 8,
          gap: 2 * 8,
          [breakpoints.up("sm")]: {
            padding: 4 * 8,
            gap: 2.5 * 8,
          },
        }}
      >
        <Typography
          variant="body1"
          color="secondary"
          css={{ maxWidth: 750, textAlign: "center" }}
        >
          The page you were looking for doesn't exist.
        </Typography>
      </div>
    </HeroWrapper>
  );
}

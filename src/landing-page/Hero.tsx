"use client";
import { breakpoints, styled } from "@/lib/styled";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Link } from "./components/Link";
import { Typography } from "./components/Typography";
import { useTheme } from "@emotion/react";

export const VisuallyHidden = styled.div({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

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

const StyledImg = styled("img")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 280,
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 0 24px hsl(220, 100%, 95%)",
  border: `1px solid ${theme.vars.palette.divider}`,
  backgroundSize: "cover",
  objectFit: "cover",
  objectPosition: "left top",
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px hsl(220, 100%, 35%, 0.2)",
  }),
  [breakpoints.up("sm")]: {
    height: 600,
    objectPosition: "top",
    marginTop: theme.spacing(10),
  },
}));

export function Hero({ isDarkMode }: { isDarkMode?: boolean }) {
  const theme = useTheme();

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
          as="h1"
          variant="h1"
          color="primary"
          css={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5 * 8,
            [breakpoints.up("sm")]: {
              gap: 1 * 8,
            },
          }}
        >
          The
          <span
            css={{
              fontSize: "inherit",
              color: theme.vars.palette.primary.main,
              ...theme.applyStyles("dark", {
                color: theme.vars.palette.primary.light,
              }),
            }}
          >
            best&nbsp;product
          </span>
          release
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          css={{ maxWidth: 750, textAlign: "center" }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </Typography>
        <form
          action="#"
          css={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1 * 8,
            [breakpoints.up("sm")]: {
              flexDirection: "row",
            },
          }}
        >
          <VisuallyHidden
            as="label"
            htmlFor="email-hero"
            css={{
              display: "block",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            Email
          </VisuallyHidden>
          <Input
            id="email-hero"
            autoComplete="off"
            aria-label="Enter your email address"
            placeholder="Your email address"
            css={{
              width: "100%",
              [breakpoints.up("sm")]: {
                width: "fit-content",
              },
            }}
          />
          <Button
            type="button"
            size="large"
            variant="contained"
            css={{
              width: "100%",
              [breakpoints.up("sm")]: {
                width: "fit-content",
              },
            }}
          >
            Start now
          </Button>
        </form>
        <Typography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          css={{ textAlign: "center" }}
        >
          By clicking &quot;Start now&quot; you agree to our&nbsp;
          <Link href="#" variant="caption" fontWeight="medium">
            Terms & Conditions
          </Link>
          .
        </Typography>
        <picture>
          <source
            srcSet={
              isDarkMode
                ? "/static/images/templates/templates-images/hero-dark.webp"
                : "/static/images/templates/templates-images/hero-light.webp"
            }
            type="image/webp"
          />
          <StyledImg
            alt="Product UI"
            src={
              isDarkMode
                ? "/static/images/templates/templates-images/hero-dark.jpg"
                : "/static/images/templates/templates-images/hero-light.png"
            }
          />
        </picture>
      </div>
    </HeroWrapper>
  );
}

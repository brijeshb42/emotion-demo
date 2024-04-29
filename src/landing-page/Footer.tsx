"use client";
import { useTheme } from "@emotion/react";
import { breakpoints, styled } from "@/lib/styled";
import { Container } from "./components/Container";
import SitemarkIcon from "./components/SiteMarkIcon";
import { Typography } from "./components/Typography";
import { Stack } from "./components/Stack";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Link } from "./components/Link";
import { Divider } from "./components/Divider";

const WrappedLink = styled(Link)<{ variant?: string; fontWeight?: string }>(
  ({ theme }) => ({
    ...theme.typography.body2,
    color: `${theme.vars.palette.text.secondary} !important`,
  })
);

export function Footer() {
  const theme = useTheme();
  return (
    <Container>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          [breakpoints.up("sm")]: {
            flexDirection: "row",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            minWidth: "100%",
            gap: 4 * 8,
            [breakpoints.up("sm")]: {
              minWidth: "60%",
            },
          }}
        >
          <div
            css={{
              width: "100%",
              [breakpoints.up("sm")]: {
                width: "60%",
              },
            }}
          >
            <SitemarkIcon />
            <Typography
              variant="body2"
              fontWeight="semibold"
              css={{ marginTop: 2 * 8, marginBottom: 0.5 * 8 }}
            >
              Join the newsletter
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              css={{ marginBottom: 2 * 8 }}
            >
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack
              css={{
                flexDirection: "column",
                gap: 1 * 8,
                [breakpoints.up("sm")]: {
                  flexDirection: "row",
                  alignItems: "end",
                },
              }}
            >
              <Stack
                direction="column"
                css={{
                  width: "100%",
                  [breakpoints.up("sm")]: {
                    width: "fit-content",
                  },
                }}
              >
                <Typography
                  as="label"
                  // @ts-expect-error
                  htmlFor="email-newsletter"
                  variant="body2"
                  color="secondary"
                  fontWeight="medium"
                  css={{ marginBottom: 0.5 * 8 }}
                >
                  Your email:
                </Typography>
                <Input
                  id="email-newsletter"
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
              </Stack>
              <Button
                variant="contained"
                color="primary"
                size="large"
                css={{
                  width: "100%",
                  [breakpoints.up("sm")]: {
                    width: "fit-content",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </div>
        </div>
        <div
          css={{
            display: "none",
            flexDirection: "column",
            gap: 1 * 8,
            [breakpoints.up("sm")]: {
              display: "flex",
            },
          }}
        >
          <Typography variant="body2" fontWeight="semibold">
            Product
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            Features
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Testimonials
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Highlights
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Pricing
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            FAQs
          </WrappedLink>
        </div>
        <div
          css={{
            display: "none",
            flexDirection: "column",
            gap: 1 * 8,
            [breakpoints.up("sm")]: {
              display: "flex",
            },
          }}
        >
          <Typography variant="body2" fontWeight="semibold">
            Company
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            About us
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Careers
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Press
          </WrappedLink>
        </div>
        <div
          css={{
            display: "none",
            flexDirection: "column",
            gap: 1 * 8,
            [breakpoints.up("sm")]: {
              display: "flex",
            },
          }}
        >
          <Typography variant="body2" fontWeight="semibold">
            Legal
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            Terms
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Privacy
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Contact
          </WrappedLink>
        </div>
      </div>
      <Divider css={{ marginTop: 2 * 8, marginBottom: 2 * 8 }} />
      <div
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          [breakpoints.up("sm")]: {
            flexDirection: "row",
          },
        }}
      >
        <div css={{ display: "flex", gap: 0.5 * 8 }}>
          <WrappedLink
            color={theme.vars.palette.text.secondary}
            variant="body2"
            href="#"
          >
            Privacy Policy
          </WrappedLink>
          <Typography
            css={{ marginLeft: 0.5 * 8, marginRight: 0.5 * 8, opacity: 0.5 }}
          >
            •
          </Typography>
          <WrappedLink
            color={theme.vars.palette.text.secondary}
            variant="body2"
            href="#"
          >
            Terms of Service
          </WrappedLink>
        </div>
        <Typography
          variant="body2"
          css={{ color: theme.vars.palette.text.secondary, marginTop: 1 * 8 }}
        >
          Copyright ©&nbsp;<Link href="https://mui.com/">Sitemark</Link>&nbsp;
          {new Date().getFullYear()}
        </Typography>
      </div>
    </Container>
  );
}

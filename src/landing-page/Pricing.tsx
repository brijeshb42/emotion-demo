"use client";
import { breakpoints, css, styled } from "@/lib/styled";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";
import { Typography } from "./components/Typography";
import { Chip } from "./components/Chip";
import { Sparkles, CheckCircleRoundedIcon } from "./components/Icons";
import { useTheme } from "@emotion/react";

type Tier = {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
  subheader?: string;
};

const tiers: Tier[] = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const TierCardRoot = styled(Card)<{ isProfessional?: boolean }>(
  ({ theme, isProfessional = false }) => ({
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    gap: theme.spacing(2),
    backgroundColor: theme.vars.palette.background.plain,
    borderRadius: theme.shape.borderRadius,
    [breakpoints.down("sm")]: {
      width: "100%",
    },
    ...(isProfessional && {
      border: "none",
      boxShadow: "0 8px 12px hsla(210, 100%, 42%, 0.2)",
      background: `radial-gradient(circle at 50% 0%, ${theme.vars.palette.primary.main}, hsl(210, 100%, 15%))`,
      ...theme.applyStyles("dark", {
        boxShadow: "0 8px 12px hsla(210, 1000%, 10%, 0.8)",
      }),
    }),
  })
);

function TierCard({
  title,
  subheader,
  price,
  description,
  buttonVariant,
  buttonText,
}: Tier) {
  const theme = useTheme();
  return (
    <TierCardRoot isProfessional={title === "Professional"}>
      <div
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          as="h3"
          variant="h6"
          css={{ color: title === "Professional" ? "#FFF" : undefined }}
        >
          {title}
        </Typography>
        {title === "Professional" && (
          <Chip>
            <Sparkles />
            {subheader}
          </Chip>
        )}
      </div>
      <div css={{ display: "flex", alignItems: "baseline", gap: 1 * 8 }}>
        <Typography
          variant="h2"
          color="primary"
          css={{ color: title === "Professional" ? "#FFF" : undefined }}
        >
          ${price}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          css={{ color: title === "Professional" ? "#FFF" : undefined }}
        >
          per month
        </Typography>
      </div>
      <Divider css={{ opacity: title === "Professional" ? 0.5 : 1 }} />
      <div css={{ display: "flex", flexDirection: "column", gap: 1 * 8 }}>
        {description.map((line) => (
          <div
            key={line}
            css={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <CheckCircleRoundedIcon
              fill={
                title === "Professional"
                  ? "#FFF"
                  : theme.vars.palette.primary.main
              }
            />
            <Typography
              variant="body2"
              css={{ color: title === "Professional" ? "#FFF" : undefined }}
            >
              {line}
            </Typography>
          </div>
        ))}
      </div>
      <Button size="large" variant={buttonVariant} color="primary" fullWidth>
        {buttonText}
      </Button>
    </TierCardRoot>
  );
}

export function Pricing() {
  return (
    <Container id="pricing">
      <div
        css={{
          marginBottom: 3 * 8,
          [breakpoints.up("sm")]: {
            width: "100%",
            textAlign: "left",
            marginBottom: 2 * 8,
          },
          [breakpoints.up("md")]: {
            width: "60%",
            textAlign: "center",
          },
        }}
      >
        <Typography as="h2" variant="h4">
          Available plans
        </Typography>
        <Typography variant="body1" color="secondary">
          Quickly build an effective pricing table for your potential customers
          with this layout.
        </Typography>
      </div>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2 * 8,
          [breakpoints.up("md")]: {
            flexDirection: "row",
          },
        }}
      >
        {tiers.map((tier) => (
          <TierCard key={tier.title} {...tier} />
        ))}
      </div>
    </Container>
  );
}

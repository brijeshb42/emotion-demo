"use client";
import { Card } from "./components/Card";
import { Container } from "@/landing-page/components/Container";
import { Typography } from "./components/Typography";
import {
  AutoFixHighRoundedIcon,
  ConstructionRoundedIcon,
  QueryStatsRoundedIcon,
  SettingsRoundedIcon,
  SupportAgentRoundedIcon,
  ThumbsupAltRoundedIcon,
} from "./components/Icons";
import { breakpoints } from "@/lib/styled";
import { useTheme } from "@emotion/react";

const items = [
  {
    icon: SettingsRoundedIcon,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: ConstructionRoundedIcon,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: ThumbsupAltRoundedIcon,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: AutoFixHighRoundedIcon,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: SupportAgentRoundedIcon,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: QueryStatsRoundedIcon,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export function Highlights() {
  const theme = useTheme();
  return (
    <Container id="highlights">
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
          Highlights
        </Typography>
        <Typography variant="body1" color="secondary">
          Explore why our product stands out: adaptability, durability,
          user-friendly design, and innovation. Enjoy reliable customer support
          and precision in every detail.
        </Typography>
      </div>
      <div
        css={{
          display: "grid",
          gap: 2 * 8,
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          [breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              css={{
                backgroundColor: theme.vars.palette.background.lvl2,
              }}
            >
              <Icon
                height={24}
                width={24}
                style={{ fill: theme.vars.palette.text.primary }}
              />
              <Typography
                variant="body2"
                color="primary"
                fontWeight="semibold"
                css={{ marginTop: 1.5 * 8 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="secondary">
                {item.description}
              </Typography>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

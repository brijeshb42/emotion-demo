import { styled } from "@/lib/styled";

const fontWeightMap = {
  regular: "fontWeightRegular",
  medium: "fontWeightMedium",
  semibold: "fontWeightSemiBold",
  bold: "fontWeightBold",
} as const;

export const Typography = styled("p", {
  shouldForwardProp(propName) {
    return !["as", "color", "fontWeight", "gutterBottom", "variant"].includes(
      propName
    );
  },
})<{
  color?: "primary" | "secondary" | "disabled";
  fontWeight?: keyof typeof fontWeightMap;
  gutterBottom?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "button"
    | "subtitle"
    | "caption"
    | "inherit";
}>(({ theme, color, fontWeight, gutterBottom, variant }) => ({
  ...theme.typography[variant ?? "body1"],
  ...(gutterBottom && {
    marginBottom: "0.35em",
  }),
  color: theme.vars.palette.text[color || "primary"],
  ...(fontWeight && {
    fontWeight: theme.typography[fontWeightMap[fontWeight ?? "regular"]],
  }),
}));

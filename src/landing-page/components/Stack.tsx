import { styled } from "@/lib/styled";

export const Stack = styled.div<{ direction?: "row" | "column" }>(
  ({ direction = "column" }) => ({
    display: "flex",
    flexDirection: direction,
  })
);

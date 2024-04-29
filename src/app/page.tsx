import { Header } from "@/landing-page/Header";
import { Hero } from "@/landing-page/Hero";
import { Divider } from "@/landing-page/components/Divider";
import { Features } from "@/landing-page/Features";
import { Testimonials } from "@/landing-page/Testimonials";
import { Highlights } from "@/landing-page/Highlights";
import { Pricing } from "@/landing-page/Pricing";
import { Footer } from "@/landing-page/Footer";
import { GlobalStyle } from "@/landing-page/GlobalStyle";
import { cookies } from "next/headers";
import Perf from "@/landing-page/Perf";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const theme = cookies().get("theme")?.value || "dark";

  return (
    <main>
      <GlobalStyle />
      <Header theme={theme} />
      <Hero isDarkMode={theme === "dark"} />
      <Divider />
      <Features isDarkMode={theme === "dark"} />
      <Divider />
      <Testimonials isDarkMode={theme === "dark"} />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
      {searchParams.metric === "1" && <Perf />}
    </main>
  );
}

import { Header } from "@/landing-page/Header";
import { Hero } from "@/landing-page/Hero";
import { Divider } from "@/landing-page/components/Divider";
import { Features } from "@/landing-page/Features";
import { Testimonials } from "@/landing-page/Testimonials";
import { Highlights } from "@/landing-page/Highlights";
import { Pricing } from "@/landing-page/Pricing";
import { Footer } from "@/landing-page/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}

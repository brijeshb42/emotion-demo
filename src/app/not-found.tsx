import { Header } from "@/landing-page/Header";
import { NotFoundHero } from "@/landing-page/NotFoundHero";
import { cookies } from "next/headers";

export default function NotFound() {
  const theme = cookies().get("theme")?.value || "dark";
  return (
    <main>
      <Header theme={theme} />
      <NotFoundHero />
    </main>
  );
}

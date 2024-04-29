"use server";

import { cookies } from "next/headers";

export async function toggleTheme() {
  const theme = cookies().get("theme")?.value || "dark";
  if (theme === "light") {
    cookies().delete("theme");
  } else {
    cookies().set("theme", "light");
  }
}

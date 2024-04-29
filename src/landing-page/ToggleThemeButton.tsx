import { toggleTheme } from "@/lib/toggleTheme";
import { Button } from "./components/Button";
import { DarkModeIcon, LightModeIcon } from "./components/Icons";

export function ToggleThemeButton({ currentTheme }: { currentTheme?: string }) {
  return (
    <form action={toggleTheme}>
      <Button
        id="toggle-theme"
        type="submit"
        variant="plain"
        size="medium"
        css={{ width: 32 }}
      >
        {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </form>
  );
}

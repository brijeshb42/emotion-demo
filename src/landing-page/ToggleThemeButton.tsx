import { Button } from "./components/Button";
import { DarkModeIcon } from "./components/Icons";

export function ToggleThemeButton() {
  return (
    <form>
      <Button
        id="toggle-theme"
        type="submit"
        variant="plain"
        size="medium"
        css={{ width: 32 }}
      >
        {/* {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />} */}
        <DarkModeIcon />
      </Button>
    </form>
  );
}

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-90 scale-0 absolute' : 'rotate-0 scale-100'} text-foreground`} />
      <Moon className={`h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0 absolute'} text-foreground`} />
    </button>
  );
};

export default ThemeToggle;

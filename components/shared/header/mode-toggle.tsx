"use client";

/**
 * ModeToggle-Komponente
 * ----------------------------------------
 * Bietet einen Dropdown-Button zum Umschalten zwischen
 * Hell-, Dunkel- und System-Modus.
 */

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "../../ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
  // Wegen SSR: Wir müssen warten, bis das Theme im Client gemountet ist
  const [mounted, setMounted] = useState(false);

  // Theme-Status & Setter von next-themes
  const { theme, setTheme } = useTheme();

  // Setzt mounted auf true, sobald Komponente im Client geladen ist
  useEffect(() => setMounted(true), []);

  // Vor dem Mounten nichts rendern (verhindert Hydrationsfehler)
  if (!mounted) return null;

  return (
    <DropdownMenu>
      {/* Trigger-Button für das Dropdown, zeigt das passende Theme-Icon */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0" aria-label="Designmodus auswählen">
          {theme === "system" ? <SunMoon /> : theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown-Inhalt */}
      <DropdownMenuContent>
        <DropdownMenuLabel>Designmodus wählen</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* System-Checkbox */}
        <DropdownMenuCheckboxItem checked={theme === "system"} onClick={() => setTheme("system")}>
          System
        </DropdownMenuCheckboxItem>

        {/* Hell-Checkbox */}
        <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => setTheme("light")}>
          Hell
        </DropdownMenuCheckboxItem>

        {/* Dunkel-Checkbox */}
        <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={() => setTheme("dark")}>
          Dunkel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;

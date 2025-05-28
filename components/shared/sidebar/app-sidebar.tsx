"use client";

/**
 * Haupt-Sidebar-Komponente für die gesamte App.
 * Zeigt Rollenwahl, Navigation, zusätzliche Bereiche, Back Office und Nutzerinfos.
 */

import * as React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton, SidebarRail } from "@/components/ui/sidebar";
import { NavUser } from "./selection/nav-user";
import Link from "next/link";
import Image from "next/image";
import { NavigationSection } from "./selection/navigation-section";
import { featureNavigation } from "./data/feature-navigation";
import { mainMenuNavigation } from "./data/main-navigation";
import { backOfficeNavigation } from "./data/backOffice-navigation";

// Beispiel-Nutzerdaten (später aus Auth/Backend holen)
const data = {
  user: {
    name: "Dominik Graf",
    email: "dominik.graf2001@gmail.com",
    avatar: "",
  },
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    // Die Sidebar ist zusammenklappbar und nimmt alle weiteren Props entgegen
    <Sidebar collapsible="icon" {...props}>
      {/* Kopfbereich: Rollenwahl */}
      <SidebarHeader>
        <SidebarMenuButton asChild tooltip="Dashboard">
          <span>
            <Link href="/dashboard" passHref legacyBehavior>
              <span className="flex items-center gap-2">
                {/* Light Theme Logo */}
                <Image
                  src="/images/Logo2.jpg"
                  alt="Logo Light"
                  width={0}
                  height={0}
                  className="h-6 w-auto object-contain dark:hidden"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
                {/* Dark Theme Logo */}
                <Image
                  src="/images/logo.png"
                  alt="Logo Dark"
                  width={0}
                  height={0}
                  className="h-6 w-auto object-contain hidden dark:block"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </span>
            </Link>
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
      {/* Hauptinhalt: Navigationsgruppen und weitere Abschnitte */}
      <SidebarContent>
        {/* Primäre Bereiche (z. B. Teams, Projekte), dynamisch aus Daten */}
        <NavigationSection title="Deine Bereiche" items={mainMenuNavigation} />
        {/* Extra-Bereiche & Tools */}
        <NavigationSection title="Extras & Tools" items={featureNavigation} />
        {/* Back Office Bereich */}
        <NavigationSection title="Back Office" items={backOfficeNavigation} />
      </SidebarContent>
      {/* Footer: Nutzer-Avatar und Menü */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* Rail für mobile/touch Steuerung */}
      <SidebarRail />
    </Sidebar>
  );
}

"use client";

/**
 * Haupt-Sidebar-Komponente für die gesamte App.
 * Zeigt Rollenwahl, Navigation, zusätzliche Bereiche, Back Office und Nutzerinfos.
 */

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { roles } from "./data/roles.data";
import { additionalSections } from "./data/additionalSections";
import { backOffice } from "./data/backOffice";
import { RoleSwitcher } from "./selection/role-switcher";
import { AdditionalSection } from "./selection/additional-section";
import { BackOfficeSection } from "./selection/back-office-section";
import { NavUser } from "./selection/nav-user";
import { Home } from "lucide-react";
import Link from "next/link";
import { PrimaryMenu } from "./selection/primary-menu";
import { primaryMenu } from "./data/primaryMenu";

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
        <RoleSwitcher roles={roles} />
      </SidebarHeader>
      {/* Hauptinhalt: Navigationsgruppen und weitere Abschnitte */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                {/* Dashboard-Link mit Icon */}
                {/* TODO: Hier könnte das Logo stehen */}

                <span>
                  <Link href="/dashboard" passHref legacyBehavior>
                    <span className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* Primäre Bereiche (z. B. Teams, Projekte), dynamisch aus Daten */}
        <PrimaryMenu title="Deine Bereiche" items={primaryMenu} />
        {/* Extra-Bereiche & Tools */}
        <AdditionalSection title="Extras & Tools" additionalSections={additionalSections} />
        {/* Back Office Bereich */}
        <BackOfficeSection title="Back Office" backOfficeSection={backOffice} />
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

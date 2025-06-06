"use client";

/**
 * Komponente für den Rollenwechsel im Sidebar-Header.
 * Zeigt aktuelle Rolle und ermöglicht die Auswahl einer anderen Rolle.
 * Die Rollen können später aus dem Backend anahand der Nutzer-ID geladen werden.
 * Die Rolle, beinfluss die Darstellung und Berechtigungen in der App.
 */

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Role } from "./data/sidebar.type";

export function RoleSwitcher({ roles }: { roles: Role[] }) {
  const { isMobile } = useSidebar();
  const [activeRole, setActiveRole] = React.useState(roles && roles.length > 0 ? roles[0] : null);

  if (!activeRole) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              {/* Rollen-Logo */}
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                <activeRole.logo className="size-4" />
              </div>
              {/* Rollenname und Plan */}
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeRole.name}</span>
                <span className="truncate text-xs">{activeRole.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}>
            <DropdownMenuLabel className="text-xs text-muted-foreground">Rolle</DropdownMenuLabel>
            {roles.map((role, index) => (
              <DropdownMenuItem key={role.name} onClick={() => setActiveRole(role)} className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <role.logo className="size-4 shrink-0" />
                </div>
                {role.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

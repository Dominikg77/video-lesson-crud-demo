"use client";

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
import { primaryMenu } from "./data/primaryMenu";
import { additionalSections } from "./data/additionalSections";
import { backOffice } from "./data/backOffice";
import { RoleSwitcher } from "./selection/role-switcher";
import { PrimaryMenu } from "./selection/primary-menu";
import { AdditionalSection } from "./selection/additional-section";
import { BackOfficeSection } from "./selection/back-office-section";
import { NavUser } from "./selection/nav-user";
import { Home } from "lucide-react";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Dominik Graf",
    email: "dominik.graf2001@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <RoleSwitcher roles={roles} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <span>
                  <Link href="/dashboard" passHref legacyBehavior>
                    <span className="flex items-center gap-2">
                      {/* TODO: LOGO */}
                      <Home className="w-5 h-5" />
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <PrimaryMenu items={primaryMenu} />
        <AdditionalSection additionalSections={additionalSections} />
        <BackOfficeSection backOfficeSection={backOffice} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

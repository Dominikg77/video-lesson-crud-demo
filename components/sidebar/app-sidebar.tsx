"use client";

import * as React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { roles } from "./data/roles.data";
import { primaryMenu } from "./data/primaryMenu";
import { additionalSections } from "./data/additionalSections";
import { backOffice } from "./data/backOffice";
import { RoleSwitcher } from "./selection/role-switcher";
import { PrimaryMenu } from "./selection/primary-menu";
import { AdditionalSection } from "./selection/additional-section";
import { BackOfficeSection } from "./selection/back-office-section";
import { NavUser } from "./selection/nav-user";

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
        {/* LOGO */}
        {/* <div className="my-4 flex justify-center">
          <Image
            src="/images/logo2.jpg"
            alt="Logo"
            width={220} 
            height={15} 
            priority 
          />
        </div> */}

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

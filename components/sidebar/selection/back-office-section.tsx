"use client";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SectionItem } from "../data/sidebar.type";

export function BackOfficeSection({ title, backOfficeSection }: { title: string; backOfficeSection: SectionItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {backOfficeSection.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <a href={item.url} className="flex items-center gap-2">
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

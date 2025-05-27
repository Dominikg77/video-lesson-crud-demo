"use client";

/**
 * Komponente für Back-Office-Bereiche in der Sidebar.
 * Zeigt alle übergebenen Backoffice-Sektionen an.
 */

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SectionItem } from "../data/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackOfficeSection({ title, backOfficeSection }: { title: string; backOfficeSection: SectionItem[] }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {backOfficeSection.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <span className={pathname === item.url ? "text-primary font-bold" : item.isDisabled ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500" : ""}>
                <Link href={item.url} className="flex items-center gap-2">
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

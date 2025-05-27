"use client";

/**
 * Komponente für die primären Navigationsbereiche in der Sidebar.
 * Unterstützt Collapsible-Gruppen für Untermenüs.
 */

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PrimaryMenuSection } from "../data/sidebar.type";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function PrimaryMenu({ title, items }: { title: string; items: PrimaryMenuSection[] }) {
  const pathname = usePathname();

  // State: Offen-Status für jede Collapsible-Gruppe
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Initialisiere offene Gruppen basierend auf der aktuellen Route, damit die Sidebar beim Laden den richtigen Zustand hat
  useEffect(() => {
    const newOpenItems: Record<string, boolean> = {};
    items.forEach((item) => {
      newOpenItems[item.title] = item.items?.some((subItem) => pathname === subItem.url || pathname.startsWith(subItem.url)) ?? false;
    });
    setOpenItems(newOpenItems);
  }, [pathname, items]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={!!openItems[item.title]}
            onOpenChange={(isOpen) => setOpenItems((prev) => ({ ...prev, [item.title]: isOpen }))}
            className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span className={item.isDisabled ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500" : ""}>
                    {item.title}
                  </span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url} passHref legacyBehavior>
                          <span
                            className={[
                              "flex items-center px-2 py-1 rounded transition-colors duration-150",
                              pathname === subItem.url
                                ? "text-primary font-bold bg-sidebar-accent/50"
                                : subItem.isDisabled
                                ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500"
                                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer",
                            ].join(" ")}>
                            {subItem.title}
                          </span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

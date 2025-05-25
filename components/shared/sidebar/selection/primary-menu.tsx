"use client";

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

  // State für offenen Zustand der Collapsible-Gruppen
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Initialisieren und Updaten der offenen Gruppen basierend auf der aktuellen Route
  useEffect(() => {
    const newOpenItems: Record<string, boolean> = {};
    items.forEach((item) => {
      newOpenItems[item.title] =
        item.items?.some(
          (subItem) => pathname === subItem.url || pathname.startsWith(subItem.url)
        ) ?? false;
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
            onOpenChange={(isOpen) =>
              setOpenItems((prev) => ({ ...prev, [item.title]: isOpen }))
            }
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span className={item.isDisabled ? "text-gray-700" : ""}>{item.title}</span>
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
                            className={
                              pathname === subItem.url
                                ? "text-blue-600 font-bold"
                                : subItem.isDisabled
                                ? "text-gray-700"
                                : ""
                            }
                          >
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

"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavigationMenuSection } from "../data/sidebar.type";

export function NavigationSection({
  title,
  items,
}: {
  title: string;
  items: NavigationMenuSection[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((section) => {
          const isActive = pathname === section.url;
          const isDisabled = section.isDisabled;

          // Falls Items vorhanden sind – Collapsible anzeigen
          if (section.items && section.items.length > 0) {
            return <CollapsibleSection key={section.title} section={section} pathname={pathname} />;
          }

          // Einzelner Link
          return (
            <SidebarMenuItem key={section.title}>
              <SidebarMenuButton asChild tooltip={section.title}>
                <span
                  className={
                    isActive
                      ? "text-primary font-bold"
                      : isDisabled
                      ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500"
                      : ""
                  }
                >
                  <Link href={section.url} className="flex items-center gap-2">
                    <section.icon />
                    <span>{section.title}</span>
                  </Link>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function CollapsibleSection({
  section,
  pathname,
}: {
  section: NavigationMenuSection;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild tooltip={section.title} onClick={() => setOpen(!open)}>
          <span
            className={
              section.isDisabled
                ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500"
                : ""
            }
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <section.icon />
              <span>{section.title}</span>
              <span className="ml-auto">{open ? "▾" : "▸"}</span>
            </div>
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      {open &&
        section.items?.map((subItem) => (
          <SidebarMenuItem key={subItem.title} className="ml-6">
            <SidebarMenuButton asChild tooltip={subItem.title}>
              <span
                className={
                  pathname === subItem.url
                    ? "text-primary font-bold"
                    : subItem.isDisabled
                    ? "text-gray-900 opacity-50 cursor-not-allowed dark:text-gray-500"
                    : ""
                }
              >
                <Link href={subItem.url} className="flex items-center gap-2">
                  <span>– {subItem.title}</span>
                </Link>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
    </>
  );
}

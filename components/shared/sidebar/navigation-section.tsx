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
import { useEffect, useState } from "react";
import { NavigationMenuSection } from "./data/sidebar.type";

export function NavigationSection({
  title,
  items,
}: {
  title: string;
  items: NavigationMenuSection[];
}) {
  const pathname = usePathname();

  // Offen-Status für jede Gruppe
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Initial öffnet die passenden Gruppen zur aktuellen Route
  useEffect(() => {
    const newOpenItems: Record<string, boolean> = {};
    items.forEach((section) => {
      newOpenItems[section.title] =
        section.items?.some(
          (subItem) => pathname === subItem.url || pathname.startsWith(subItem.url)
        ) ?? false;
    });
    setOpenItems(newOpenItems);
  }, [pathname, items]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((section) => {
          const isActive = pathname === section.url;
          const isDisabled = section.isDisabled;

          if (section.items && section.items.length > 0) {
            return (
              <CollapsibleSection
                key={section.title}
                section={section}
                pathname={pathname}
                open={!!openItems[section.title]}
                setOpen={(isOpen) =>
                  setOpenItems((prev) => ({ ...prev, [section.title]: isOpen }))
                }
              />
            );
          }

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
  open,
  setOpen,
}: {
  section: NavigationMenuSection;
  pathname: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
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

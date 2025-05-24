"use client";

import { ChevronRight } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
import Link from "next/link";
import { PrimaryMenuSection } from "../data/sidebar.type";
import { usePathname } from "next/navigation";

export function PrimaryMenu({ title, items }: { title: string; items: PrimaryMenuSection[] }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.items?.some((subItem) => pathname === subItem.url || pathname.startsWith(subItem.url))}
            className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span className={item.isDisabled ? "text-gray-400" : ""}>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <span className={pathname === subItem.url ? "text-blue-600 font-bold" : subItem.isDisabled ? "text-gray-400" : ""}>
                          <Link href={subItem.url} passHref legacyBehavior>
                            <span>
                              {subItem.title} {subItem.isDisabled}
                            </span>
                          </Link>
                        </span>
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

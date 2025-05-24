"use client";

import { usePathname } from "next/navigation";
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

  // console.log("PrimaryMenu items:", items);
  // console.log("pathname:", pathname);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={item.items?.some((subItem) => pathname === subItem.url || pathname.startsWith(subItem.url))}
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

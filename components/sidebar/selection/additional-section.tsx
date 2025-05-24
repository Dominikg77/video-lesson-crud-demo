"use client"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SectionItem } from "../data/sideNav.type"

export function AdditionalSection({
  additionalSections,
}: {
  additionalSections: SectionItem[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Extras & Tools</SidebarGroupLabel>
      <SidebarMenu>
        {additionalSections.map((item) => (
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
  )
}

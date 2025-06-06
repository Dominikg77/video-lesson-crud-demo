import { RoleName } from "@/lib/constants/roles-package"
import type { ComponentType, SVGProps } from "react"

// Type definitions for the sidebar navigation components
// User
// Role
// PrimaryMenuSection
// SelectionItem (Extra Section / Back Office)

export interface Role {
    name: string
    logo: ComponentType<SVGProps<SVGSVGElement>>
    plan: string
    role: RoleName
}




export interface NavigationMenuSection {
    title: string
    url: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    items?: MenuItem[]
    isDisabled: boolean,

}
export interface MenuItem {
    title: string
    url: string
    isDisabled: boolean
}

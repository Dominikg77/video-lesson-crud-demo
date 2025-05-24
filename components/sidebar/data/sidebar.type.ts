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


export interface PrimaryMenuSection {
    title: string
    url: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    isActive?: boolean
    items: MenuItem[]
}
export interface MenuItem {
    title: string
    url: string
}

/* Extra Section / Back Office */

export interface SectionItem {
    name: string
    url: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
}

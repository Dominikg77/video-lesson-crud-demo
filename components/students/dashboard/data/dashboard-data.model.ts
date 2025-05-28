import { LucideIcon } from "lucide-react"

export interface TradingCategory {
    title: string
    description: string
    icon: LucideIcon 
    color: string
    isActive: boolean
    link: string
}

export type EventPermission = "alle" | "addon";
export interface EventItem {
  title: string
  description: string
  icon: LucideIcon
  date: string
  time: string
  link: string
  permission: EventPermission;
}

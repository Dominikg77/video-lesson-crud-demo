import {
  BookOpen,
  BarChart2,
  Settings,
} from "lucide-react"
import { BackOfficeRoutes } from "@/lib/constants/route-constant"
import { NavigationMenuSection } from "./sidebar.type"

export const backOfficeNavigation: NavigationMenuSection[] = [

  {
    title: "Academy",
    url: "#",
    icon: BookOpen,
    isDisabled: false,
    items: [
      { title: "Academy", url: BackOfficeRoutes.academy, isDisabled: false, },
      { title: "Lessons", url: "#", isDisabled: true, },
      { title: "Live Stream", url: "#", isDisabled: true, },
      { title: "Hilfe", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
    isDisabled: true,
    items: [
      { title: "Web-Tracker", url: "#", isDisabled: true, },
      { title: "Einkäufe", url: "#", isDisabled: true, },
    ],
  },
  { title: "Settings", url: "#", icon: Settings, isDisabled: true, },
]

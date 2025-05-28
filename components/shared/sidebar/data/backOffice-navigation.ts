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
      { title: "Lessons", url: "#", isDisabled: false, },
      { title: "Live Stream", url: "#", isDisabled: false, },
      { title: "Hilfe", url: "#", isDisabled: false, },
    ],
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart2,
    isDisabled: false,
    items: [
      { title: "Web-Tracker", url: "#", isDisabled: false, },
      { title: "Einkäufe", url: "#", isDisabled: false, },
    ],
  },
  { title: "Settings", url: "#", icon: Settings, isDisabled: true, },
]

import {
  BookOpen,
  FileText,
  Video,
  CreditCard,
  BarChart2,
  Settings,
} from "lucide-react"
import { SectionItem } from "./sidebar.type"
import { BackOfficeRoutes } from "@/lib/constants/route-constant"

export const backOffice: SectionItem[] = [
  { name: "Academy", url: BackOfficeRoutes.academy, icon: BookOpen, isDisabled: false, },
  { name: "Lessons", url: "#", icon: FileText, isDisabled: true, },
  { name: "Live Streams", url: "#", icon: Video, isDisabled: true, },
  { name: "Zahlungen", url: "#", icon: CreditCard, isDisabled: true, },
  { name: "Web-Tracker", url: "#", icon: BarChart2, isDisabled: true, },
  { name: "Settings", url: "#", icon: Settings, isDisabled: true, },
]

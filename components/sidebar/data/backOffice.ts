import {
  BookOpen,
  FileText,
  Video,
  CreditCard,
  BarChart2,
  Settings,
} from "lucide-react"
import { SectionItem } from "./sidebar.type"

export const backOffice: SectionItem[] = [
  { name: "Academy", url: "#", icon: BookOpen },
  { name: "Lessons", url: "#", icon: FileText },
  { name: "Live Streams", url: "#", icon: Video },
  { name: "Zahlungen", url: "#", icon: CreditCard },
  { name: "Web-Tracker", url: "#", icon: BarChart2 },
  { name: "Settings", url: "#", icon: Settings },
]

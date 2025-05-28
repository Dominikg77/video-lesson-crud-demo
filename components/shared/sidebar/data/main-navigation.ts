import {
  Activity,
  Zap,
  Layers,
  Link,
  PencilRuler,
  Star,
} from "lucide-react"
import { IntraDayRoutes, ScalpingRoutes } from "@/lib/constants/route-constant"
import { NavigationMenuSection } from "./sidebar.type"

export const mainMenuNavigation: NavigationMenuSection[] = [
  {
    title: "Intraday",
    url: "#",
    icon: Activity,
    isDisabled: false,
    items: [
      { title: "Info", url: "#", isDisabled: true, },
      { title: "Academy", url: IntraDayRoutes.academy, isDisabled: false, },
      { title: "Lessons", url: "#", isDisabled: true, },
      { title: "Voice Over", url: "#", isDisabled: true, },
      { title: "Performance Guide", url: "#", isDisabled: true, },
      { title: "Webinar Aufzeichnung", url: "#", isDisabled: true, },
      { title: "Mentor Calls", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Scalping",
    url: "#",
    icon: Zap,
    isDisabled: false,
    items: [
      { title: "Info", url: "#", isDisabled: true, },
      { title: "Academy", url: ScalpingRoutes.academy, isDisabled: false, },
      { title: "Lessons", url: "#", isDisabled: true, },
      { title: "Voice Over", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Add-On Wissen",
    url: "#",
    icon: Layers,
    isDisabled: true,
    items: [
      { title: "Daily Insights", url: "#", isDisabled: true, },
      { title: "Live Trading", url: "#", isDisabled: true, },
      { title: "Lessons", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Software & Links",
    url: "#",
    icon: Link,
    isDisabled: true,
    items: [
      { title: "Atas", url: "#", isDisabled: true, },
      { title: "Bookmap", url: "#", isDisabled: true, },
      { title: "Trading-Kontent", url: "#", isDisabled: true, },
      { title: "Discord Community", url: "#", isDisabled: true, },
      { title: "Lightshot", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Tools",
    url: "#",
    icon: PencilRuler,
    isDisabled: true,
    items: [
      { title: "Wirtschaftskalender", url: "#", isDisabled: true, },
      { title: "Ferienkalender", url: "#", isDisabled: true, },
      { title: "Aktien-Screener", url: "#", isDisabled: true, },
      { title: "Aktien-Headmap", url: "#", isDisabled: true, },
    ],
  },
  {
    title: "Spezielles",
    url: "#",
    icon: Star,
    isDisabled: true,
    items: [
      { title: "Tralgo Day 2024", url: "#", isDisabled: true, },
      { title: "Tralgo Day Aufzeichnung", url: "#", isDisabled: true, },
      { title: "Spezial Webinar", url: "#", isDisabled: true, },
      { title: "Workshops", url: "#", isDisabled: true, },
    ],
  },
]

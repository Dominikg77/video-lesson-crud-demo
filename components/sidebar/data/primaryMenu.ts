import {
  Activity,
  Zap,
  Users,
  Layers,
  Link,
  PencilRuler,
  Star,
} from "lucide-react"
import { PrimaryMenuSection } from "./sideNav.type"
import { IntraDayRoutes } from "@/lib/route-constant"

export const primaryMenu: PrimaryMenuSection[] = [
  {
    title: "Intraday",
    url: "#",
    icon: Activity,
    isActive: true,
    items: [
      { title: "Academy", url: IntraDayRoutes.academy },
      { title: "Lessons", url: "#" },
      { title: "Voice Over", url: "#" },
      { title: "Performance Guide", url: "#" },
    ],
  },
  {
    title: "Scalping",
    url: "#",
    icon: Zap,
    items: [
      { title: "Academy", url: "#" },
      { title: "Lessons", url: "#" },
      { title: "Voice Over", url: "#" },
    ],
  },
  {
    title: "Masterclass",
    url: "#",
    icon: Users,
    items: [
      { title: "Webinar Aufzeichnung", url: "#" },
      { title: "Mentor Calls", url: "#" },
    ],
  },
  {
    title: "Add-On Wissen",
    url: "#",
    icon: Layers,
    items: [
      { title: "Daily Insights", url: "#" },
      { title: "Live Trading", url: "#" },
      { title: "Lessons", url: "#" },
    ],
  },
  {
    title: "Software & Links",
    url: "#",
    icon: Link,
    items: [
      { title: "Atas", url: "#" },
      { title: "Bookmap", url: "#" },
      { title: "Trading-Kontent", url: "#" },
      { title: "Discord Community", url: "#" },
      { title: "Lightshot", url: "#" },
    ],
  },
  {
    title: "Tools",
    url: "#",
    icon: PencilRuler,
    items: [
      { title: "Wirtschaftskalender", url: "#" },
      { title: "Ferienkalender", url: "#" },
      { title: "Aktien-Screener", url: "#" },
      { title: "Aktien-Headmap", url: "#" },
    ],
  },
  {
    title: "Spezielles",
    url: "#",
    icon: Star,
    items: [
      { title: "Tralgo Day 2024", url: "#" },
      { title: "Tralgo Day Aufzeichnung", url: "#" },
      { title: "Spezial Webinar", url: "#" },
      { title: "Workshops", url: "#" },
    ],
  },
]

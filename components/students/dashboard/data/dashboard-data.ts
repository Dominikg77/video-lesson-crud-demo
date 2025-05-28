import {
  TrendingUp,
  Zap,
  Package,
  Building2,
  PieChart,
  Play,
  Video,
  HelpCircle,
  Target,
} from "lucide-react"
import { EventItem, TradingCategory } from "./dashboard-data.model"
import { IntraDayRoutes, ScalpingRoutes } from "@/lib/constants/route-constant"

export const tradingCategories: TradingCategory[] = [
  {
    title: "Intraday",
    description:
      "Lerne die Grundlagen des Intraday-Tradings und entwickle deine Fähigkeiten, um in Echtzeit auf Marktbewegungen zu reagieren.",
    icon: TrendingUp,
    color: "bg-blue-500",
    isActive: true,
    link: IntraDayRoutes.intraDayInfo,
  },
  {
    title: "Scalping",
    description:
      "Lerne, flexibel auf die Märkte zu reagieren und deine Trades innerhalb kürzester Zeit zu platzieren.",
    icon: Zap,
    color: "bg-yellow-500",
    isActive: true,
    link: ScalpingRoutes.scalpingInfo,
  },
  {
    title: "Addon Wissen",
    description:
      "Mit diesem leistungsstarken Zusatzpaket kannst du dich optimal auf deinen täglichen Handel vorbereiten und dein Wissen gezielt erweitern.",
    icon: Package,
    color: "bg-purple-500",
    isActive: false,
    link: "#",
  },
  {
    title: "Trading Package",
    description:
      "Dank unserer engen Zusammenarbeit mit unseren Partnern ATAS und DxFeed ermöglichen wir dir exklusive Konditionen für deine Trading-Praxis.",
    icon: Target,
    color: "bg-green-500",
    isActive: false,
    link: "#",
  },
  {
    title: "Tralgo Capital",
    description:
      "Verwandle dein Wissen in echte Ergebnisse: Handle mit unserem Kapital und profitiere von flexiblen Regeln für dein $100k-Konto bei unserem hauseigenen Fremdkapitalanbieter.",
    icon: Building2,
    color: "bg-indigo-500",
    isActive: false,
    link: "#",
  },
  {
    title: "Tralgo Analytics",
    description:
      "Unser eigens entwickeltes Analysetool, Tralgo Analytics, hilft dir dabei, deine Trades auszuwerten und potenzielle Fehlerquellen zu erkennen.",
    icon: PieChart,
    color: "bg-orange-500",
    isActive: false,
    link: "#",
  },
]


export const eventItems: EventItem[] = [
  {
    title: "Live Trading",
    description: "Echtzeithandel mit Lawrence Jenker",
    icon: Play,
    date: "15.06.2025",
    time: "15:00",
    link: "#",
    permission: "addon",
  },
  {
    title: "Mentor Call",
    description: "Mit Eugen Deniskeno",
    icon: Video,
    date: "16.06.2025",
    time: "19:00",
    link: "#",
    permission: "alle",
  },
  {
    title: "FAQ",
    description: "Häufige Fragen & Antworten",
    icon: HelpCircle,
    date: "17.06.2025",
    time: "19:00",
    link: "#",
    permission: "addon",
  },
  {
    title: "Live Trading",
    description: "Echtzeithandel mit Lawrence Jenker",
    icon: Play,
    date: "21.06.2025",
    time: "15:00",
    link: "#",
    permission: "addon",
  },
]

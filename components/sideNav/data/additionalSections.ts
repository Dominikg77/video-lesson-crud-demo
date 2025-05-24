import {
    BarChart2,
    DollarSign,
    ArrowUpCircle,
    Package,
    Layers3,
    Edit3,
} from "lucide-react"
import { SectionItem } from "./sideNav.type"

export const additionalSections: SectionItem[] = [
    { name: "Analytics", url: "#", icon: BarChart2 },
    { name: "Capital", url: "#", icon: DollarSign },
    { name: "Upgrade", url: "#", icon: ArrowUpCircle },
    { name: "Trading Package", url: "#", icon: Package },
    { name: "Add On Wissen", url: "#", icon: Layers3 },
    { name: "Notizen", url: "#", icon: Edit3 },
]

import {
    BarChart2,
    DollarSign,
    ArrowUpCircle,
    Package,
    Layers3,
    Edit3,
    HelpCircle,
} from "lucide-react"
import { SectionItem } from "./sidebar.type"

export const additionalSections: SectionItem[] = [
    { name: "Analytics", url: "#", icon: BarChart2, isDisabled: true, },
    { name: "Capital", url: "#", icon: DollarSign, isDisabled: true, },
    { name: "Upgrade", url: "#", icon: ArrowUpCircle, isDisabled: true, },
    { name: "Trading Package", url: "#", icon: Package, isDisabled: true, },
    { name: "Add On Wissen", url: "#", icon: Layers3, isDisabled: true, },
    { name: "Notizen", url: "#", icon: Edit3, isDisabled: true, },
    { name: "Hilfe", url: "#", icon: HelpCircle, isDisabled: true, },

]

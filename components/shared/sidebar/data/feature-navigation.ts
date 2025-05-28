import {
    BarChart2,
    DollarSign,
    ArrowUpCircle,
    Package,
    Layers3,
    Edit3,
    HelpCircle,
} from "lucide-react"
import { NavigationMenuSection } from "./sidebar.type"

export const featureNavigation: NavigationMenuSection[] = [
    { title: "Analytics", url: "#", icon: BarChart2, isDisabled: true, },
    { title: "Capital", url: "#", icon: DollarSign, isDisabled: true, },
    { title: "Upgrade", url: "#", icon: ArrowUpCircle, isDisabled: true, },
    { title: "Trading Package", url: "#", icon: Package, isDisabled: true, },
    { title: "Add On Wissen", url: "#", icon: Layers3, isDisabled: true, },
    { title: "Notizen", url: "#", icon: Edit3, isDisabled: true, },
    { title: "Hilfe", url: "#", icon: HelpCircle, isDisabled: true, },

]

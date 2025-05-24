import { GraduationCap, Command, Code, UserCog, UserPen } from "lucide-react"
import { Role } from "./sideNav.type"


export const roles: Role[] = [
    {
        name: "Schüler",
        logo: GraduationCap,
        plan: "Masterclass",
    },
     {
        name: "Support",
        logo: UserCog,
        plan: "Support",
    },
    {
        name: "Coach",
        logo: UserPen,
        plan: "coach",
    },
    {
        name: "Admin",
        logo: Command,
        plan: "admin",
    },
    {
        name: "Super Admin",
        logo: Code,
        plan: "SuperAdmin",
    },
]

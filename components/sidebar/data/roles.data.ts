import { GraduationCap, Command, Code, UserCog, UserPen } from "lucide-react"
import { RolesConst } from "@/lib/constants/roles-package"
import { Role } from "./sidebar.type"


export const roles: Role[] = [
    {
        name: "Schüler",
        logo: GraduationCap,
        plan: "Masterclass",
        role: RolesConst.Students,
    },
    {
        name: "Support",
        logo: UserCog,
        plan: "Support",
        role: RolesConst.Support,
    },
    {
        name: "Coach",
        logo: UserPen,
        plan: "coach",
        role: RolesConst.Coach,
    },
    {
        name: "Admin",
        logo: Command,
        plan: "admin",
        role: RolesConst.Admin,
    },
    {
        name: "Super Admin",
        logo: Code,
        plan: "SuperAdmin",
        role: RolesConst.SuperAdmin,
    },
]

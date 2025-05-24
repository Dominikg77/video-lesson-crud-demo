import { GraduationCap, UserLock, Command, Code } from "lucide-react"
import { Role } from "./sideNav.type"


export const roles: Role[] = [
    {
        name: "Schüler",
        logo: GraduationCap,
        plan: "Masterclass",
    },
    {
        name: "Coach",
        logo: UserLock,
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

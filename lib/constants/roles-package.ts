export const RolesConst = {
    Students: "Schüler",
    Support: "Support",
    Coach: "Coach",
    Admin: "Admin",
    SuperAdmin: "Super Admin",
} as const

export type RoleName = typeof RolesConst[keyof typeof RolesConst];

export const PackageConst = {
    IntraDay: "Intraday",
    Scalping: "Scalping",
    Masterclass: "Masterclass",
    AddOn: "Add-On",
}
export const COUNTRIES = [
  { id: "USA", label: "USA" },
  { id: "EU", label: "EU" },
] as const

export const IMPORTANCE_LEVELS = [
  { id: 3, label: "Hoch (3)" },
  { id: 2, label: "Mittel (2)" },
  { id: 1, label: "Niedrig (1)" },
] as const

export const CALENDAR_CATEGORIES = [
  { id: "feiertag", label: "US Feiertage" },
  { id: "zinsentscheidung", label: "Zinsentscheidungen" },
  { id: "kpi", label: "KPI Daten" },
  { id: "kontraktwechsel", label: "Kontrakt-Wechsel" },
] as const

import { Badge } from "@/components/ui/badge"

interface CategoryBadgeProps {
  category: "feiertag" | "zinsentscheidung" | "kpi" | "kontraktwechsel"
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  switch (category) {
    case "zinsentscheidung":
      return <Badge variant="destructive">Zinsentscheidung</Badge>
    case "feiertag":
      return <Badge variant="default">Feiertag</Badge>
    case "kpi":
      return <Badge variant="secondary">KPI Daten</Badge>
    case "kontraktwechsel":
      return <Badge className="bg-purple-500 hover:bg-purple-600">Kontrakt-Wechsel</Badge>
    default:
      return <Badge variant="outline">Sonstiges</Badge>
  }
}

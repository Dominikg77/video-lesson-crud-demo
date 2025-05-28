import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingUp } from "lucide-react"

interface ImportanceBadgeProps {
  importance: 1 | 2 | 3
}

export function ImportanceBadge({ importance }: ImportanceBadgeProps) {
  switch (importance) {
    case 3:
      return (
        <Badge variant="destructive" className="flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          Hoch
        </Badge>
      )
    case 2:
      return (
        <Badge variant="default" className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          Mittel
        </Badge>
      )
    case 1:
      return <Badge variant="secondary">Niedrig</Badge>
    default:
      return <Badge variant="outline">Unbekannt</Badge>
  }
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ImportanceBadge } from "../badges/ImportanceBadge"
import { NewsItem } from "../financialCalendar.model"

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="border rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {news.country}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">{news.time}</span>
        </div>
        <ImportanceBadge importance={news.importance} />
      </div>
      <p className="text-sm">{news.text}</p>
      <div className="flex justify-end">
        <Button variant="ghost" size="sm" asChild>
          <a href={news.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-1" />
            Details
          </a>
        </Button>
      </div>
    </div>
  )
}

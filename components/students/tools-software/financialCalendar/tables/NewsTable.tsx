import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ExternalLink } from "lucide-react"
import { ImportanceBadge } from "../badges/ImportanceBadge"
import { NewsCard } from "../cards/NewsCard"
import { NewsItem } from "../financialCalendar.model"


interface NewsTableProps {
  news: NewsItem[]
}

export function NewsTable({ news }: NewsTableProps) {
  const sortedNews = news.sort((a, b) => b.importance - a.importance || b.time.localeCompare(a.time))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Finanz News</span>
          <Badge variant="outline">{news.length} Artikel</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Desktop Table View */}
        <div className="overflow-x-auto hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[60px]">Land</TableHead>
                <TableHead className="min-w-[60px]">Zeit</TableHead>
                <TableHead className="min-w-[200px]">Nachricht</TableHead>
                <TableHead className="min-w-[80px]">Wichtigkeit</TableHead>
                <TableHead className="min-w-[50px]">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    Keine News für die ausgewählten Filter gefunden
                  </TableCell>
                </TableRow>
              ) : (
                sortedNews.map((newsItem) => (
                  <TableRow key={newsItem.id}>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {newsItem.country}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs md:text-sm">{newsItem.time}</TableCell>
                    <TableCell>
                      <p className="text-xs md:text-sm leading-relaxed">{newsItem.text}</p>
                    </TableCell>
                    <TableCell>
                      <ImportanceBadge importance={newsItem.importance} />
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {news.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              Keine News für die ausgewählten Filter gefunden
            </div>
          ) : (
            sortedNews.map((newsItem) => <NewsCard key={newsItem.id} news={newsItem} />)
          )}
        </div>
      </CardContent>
    </Card>
  )
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon } from "lucide-react";
import { CategoryBadge } from "../badges/CategoryBadge";
import { EventCard } from "../cards/EventCard";
import { CalendarEvent } from "../financialCalendar.model";

interface EventsTableProps {
  events: CalendarEvent[];
}

export function EventsTable({ events }: EventsTableProps) {
  const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Wichtige Termine
          </span>
          <Badge variant="outline">{events.length} Termine</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Desktop Table View */}
        <div className="overflow-x-auto hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[80px]">Datum</TableHead>
                <TableHead className="min-w-[60px]">Zeit</TableHead>
                <TableHead className="min-w-[200px]">Ereignis</TableHead>
                <TableHead className="min-w-[120px]">Kategorie</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    Keine Termine für die ausgewählten Kategorien gefunden
                  </TableCell>
                </TableRow>
              ) : (
                sortedEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-mono text-xs md:text-sm">{event.date}</TableCell>
                    <TableCell className="font-mono text-xs md:text-sm">{event.time}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-xs md:text-sm">{event.title}</p>
                        <p className="text-xs text-muted-foreground hidden md:block">{event.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <CategoryBadge category={event.category} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {events.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">Keine Termine für die ausgewählten Kategorien gefunden</div>
          ) : (
            sortedEvents.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </div>
      </CardContent>
    </Card>
  );
}

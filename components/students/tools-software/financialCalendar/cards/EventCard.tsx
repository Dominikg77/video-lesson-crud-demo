import { CategoryBadge } from "../badges/CategoryBadge"
import { CalendarEvent } from "../financialCalendar.model"

interface EventCardProps {
  event: CalendarEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="border rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
          <span className="font-mono text-xs">{event.date}</span>
          <span className="font-mono text-xs text-muted-foreground">{event.time}</span>
        </div>
        <CategoryBadge category={event.category} />
      </div>
      <div>
        <p className="font-medium text-sm">{event.title}</p>
        <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
      </div>
    </div>
  )
}

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import Link from "next/link";
import { EventItem } from "./dashboard-data.model";

interface EventCardProps {
  data: EventItem;
}

export function EventCard({ data }: EventCardProps) {
  return (
    <Link href={data.link} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-colors">
              <data.icon className="w-5 h-5" />
            </div>
            <Badge variant={data.permission === "alle" ? "default" : "secondary"} className="text-xs">
              {data.permission === "alle" ? "Für alle" : "Addon Wissen"}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{data.title}</CardTitle>
          <CardDescription className="text-sm">{data.description}</CardDescription>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>
              {data.date}, {data.time} Uhr
            </span>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TradingCategory } from "./data/dashboard-data.model";

interface TradingCardProps {
  data: TradingCategory;
}

export function TradingCategoryCard({ data }: TradingCardProps) {
  return (
    <Link href={data.link} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${data.color} text-white group-hover:scale-110 transition-transform`}>
              <data.icon className="w-6 h-6" />
            </div>
            <Badge variant={data.isActive ? "default" : "secondary"} className="text-xs">
              {data.isActive ? "Aktiv" : "Inaktiv"}
            </Badge>
          </div>
          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

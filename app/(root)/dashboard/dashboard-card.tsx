/**
 * DashboardCard-Komponente
 * ------------------------
 * Stellt eine einzelne Karte für das Dashboard dar.
 * Für jedes Element via Route gedacht
 */

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCardData } from "./dashboard-main-card-data";
import Link from "next/link";

const DashboardCard = ({ title, description, link }: DashboardCardData) => {
  return (
    // Die gesamte Karte ist als Link klickbar
    <Link href={link} className="block">
      <Card className="w-full max-w-[350px] cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          {/* Titel der Karte */}
          <CardTitle>{title}</CardTitle>
          {/* Beschreibungstext */}
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* Optional: Hier kann CardContent für weitere Inhalte ergänzt werden */}
      </Card>
    </Link>
  );
};

export default DashboardCard;

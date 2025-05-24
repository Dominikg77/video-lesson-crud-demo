import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCardData } from "./dashboard-main-card-data";
import Link from "next/link";

const DashboardCard = ({ title, description, link }: DashboardCardData) => {
  return (
    <Link href={link} className="block">
      <Card className="w-[350px] cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
        </CardContent> */}
      </Card>
    </Link>
  );
};

export default DashboardCard;

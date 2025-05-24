import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardCard from "./dashboard-card";
import { dashboardMainCards } from "./dashboard-main-card-data";

export const metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Deine Bereiche</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {dashboardMainCards.map((card, index) => (
              <DashboardCard key={index} title={card.title} description={card.description} link={card.link} />
            ))}
            {/* Example cards for layout */}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;

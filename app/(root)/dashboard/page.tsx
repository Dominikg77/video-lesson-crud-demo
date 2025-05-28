/** * Dashboard Page
 * * Zeigt die Hauptkarten für verschiedene Bereiche des Dashboards an.
 * * Diese Seite ist die zentrale Anlaufstelle für den Benutzer,
 * * um auf verschiedene Trading-Bereiche zuzugreifen.
 * Dashboard: https://v0.dev/chat/custom-dashboard-design-RmvgiF118dg
 * */

import { eventItems, tradingCategories } from "@/components/students/dashboard/dashboard-data";
import { DashboardHeader } from "@/components/students/dashboard/dashboard-header";
import { EventCard } from "@/components/students/dashboard/event-card";
import { SectionHeader } from "@/components/students/dashboard/section-header";
import { TradingCategoryCard } from "@/components/students/dashboard/trading-category-card";

export const metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <DashboardHeader title="Trading Dashboard" description="Willkommen zurück! Hier ist Ihre Übersicht über alle Trading-Aktivitäten." />

      {/* Trading Categories Section */}
      <div className="space-y-6 mb-3">
        <SectionHeader title="Trading Bereiche" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tradingCategories.map((category, index) => (
            <TradingCategoryCard key={index} data={category} />
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="space-y-6">
        <SectionHeader title="Events & Sessions" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {eventItems.map((event, index) => (
            <EventCard key={index} data={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

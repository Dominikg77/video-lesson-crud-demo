"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { newsData } from "./data/newsData";
import { calendarEvents } from "./data/eventsData";
import { FilterSection } from "./filters/FilterSection";
import { NewsTable } from "./tables/NewsTable";
import { EventsTable } from "./tables/EventsTable";
import { useFilters } from "@/hooks/useFilters";

export default function FinanceDashboard() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { filters, filteredNews, filteredEvents, updateFilters, handleCountryChange, handleImportanceChange, handleCategoryChange } =
    useFilters(newsData, calendarEvents);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <TrendingUp className="h-6 w-6" />
        <h1 className="text-2xl md:text-3xl font-bold">News & Events Dashboard</h1>
      </div>

      <FilterSection
        filters={filters}
        isFilterOpen={isFilterOpen}
        onFilterOpenChange={setIsFilterOpen}
        onDateChange={(date) => updateFilters({ selectedDate: date })}
        onCountryChange={handleCountryChange}
        onImportanceChange={handleImportanceChange}
        onCategoryChange={handleCategoryChange}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <NewsTable news={filteredNews} />
        <EventsTable events={filteredEvents} />
      </div>
    </div>
  );
}

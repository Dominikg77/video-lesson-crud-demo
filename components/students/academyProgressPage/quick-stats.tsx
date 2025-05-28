"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { QuickStats as QuickStatsType } from "./data/academy-progress-page.model";

interface QuickStatsProps {
  stats: QuickStatsType;
}

export function QuickStats({ stats }: QuickStatsProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Schnellübersicht</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-blue-600 dark:text-blue-400">Lernzeit heute:</span>
          <span className="font-medium text-foreground">{stats.learningTimeToday}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-blue-600 dark:text-blue-400">Streak:</span>
          <span className="font-medium text-foreground">{stats.streak}</span>
        </div>
      </CardContent>
    </Card>
  );
}

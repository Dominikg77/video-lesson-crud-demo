"use client";

import { Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Progress as ProgressType } from "./data/academy-progress-page.model";

interface ProgressCardProps {
  progress: ProgressType;
}

export function ProgressCard({ progress }: ProgressCardProps) {
  return (
    <Card className="mb-6 w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Target className="h-5 w-5 text-blue-600" />
          <span>Ihr Fortschritt</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Sie haben {progress.completedLessons} von {progress.totalLessons} Lektionen abgeschlossen
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{progress.percentage}% abgeschlossen</span>
            <span className="text-blue-600 dark:text-blue-400">{progress.remaining} verbleibend</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

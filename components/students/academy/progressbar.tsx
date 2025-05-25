"use client";

/**
 * Fortschrittsbalken-Komponente / Zeigt aktuellen Prozentwert und Text
 */

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <Card>
      <CardContent className="p-4">
        {/* Mobile & Tablet: Fortschritt und Prozent nebeneinander */}
        <div className="flex justify-between items-center mb-2 lg:hidden">
          <p className="text-sm">Fortschritt</p>
          <span className="text-xs text-right text-gray-500">{progress}% abgeschlossen</span>
        </div>
        {/* Desktop: Fortschritt über Progressbar */}
        <p className="text-sm mb-2 hidden lg:block">Fortschritt</p>
        <Progress value={progress} className="h-3" />
        {/* Desktop: Prozent unter der Progressbar */}
        <p className="text-xs text-right mt-1 text-gray-500 hidden lg:block">{progress}% abgeschlossen</p>
      </CardContent>
    </Card>
  );
};

export default ProgressBar;

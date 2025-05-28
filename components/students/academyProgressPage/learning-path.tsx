"use client";

import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chapter } from "./data/academy-progress-page.model";
import { ChapterItem } from "./chapter-item";

interface LearningPathProps {
  chapters: Chapter[];
  onToggleExpand: (chapterId: string) => void;
}

export function LearningPath({ chapters, onToggleExpand }: LearningPathProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <BookOpen className="h-5 w-5 text-green-600" />
          <span>Lernpfad</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">Dein Fortschritt </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {chapters.map((chapter) => (
          <ChapterItem key={chapter.id} chapter={chapter} onToggleExpand={onToggleExpand} />
        ))}
      </CardContent>
    </Card>
  );
}

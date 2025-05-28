"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Chapter, SubChapter } from "./data/academy-progress-page.model";

interface ChapterItemProps {
  chapter: Chapter;
  onToggleExpand: (chapterId: string) => void;
}

export function ChapterItem({ chapter, onToggleExpand }: ChapterItemProps) {
  return (
    <div className="space-y-2 w-full">
      <div
        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted transition"
        onClick={() => onToggleExpand(chapter.id)}>
        {chapter.completed ? (
          <CheckCircle2 className="h-5 w-5 text-green-500" />
        ) : (
          <Circle className="h-5 w-5 text-gray-400 dark:text-gray-600" />
        )}
        <div className="flex-1">
          <span className={`font-medium ${chapter.completed ? "text-green-700 dark:text-green-400" : "text-foreground"}`}>
            {chapter.title}
          </span>
          {chapter.description && <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{chapter.description}</div>}
        </div>
        {chapter.completed && (
          <Badge variant="secondary" className="text-xs">
            Abgeschlossen
          </Badge>
        )}
      </div>

      {chapter.isExpanded && chapter.subChapters && <SubChapterList subChapters={chapter.subChapters} />}
    </div>
  );
}

interface SubChapterListProps {
  subChapters: SubChapter[];
}

function SubChapterList({ subChapters }: SubChapterListProps) {
  return (
    <div className="ml-8 space-y-1">
      {subChapters.map((subChapter) => (
        <div key={subChapter.id} className="flex items-center gap-3 p-2 rounded-lg">
          {subChapter.completed ? (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          ) : (
            <Circle className="h-4 w-4 text-gray-400 dark:text-gray-600" />
          )}
          <div>
            <span
              className={`text-sm ${
                subChapter.completed
                  ? "text-green-600 dark:text-green-400"
                  : subChapter.isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}>
              {subChapter.title}
            </span>
            {subChapter.description && <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{subChapter.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

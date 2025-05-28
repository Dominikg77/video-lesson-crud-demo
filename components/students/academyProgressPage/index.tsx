"use client";

import { useState } from "react";

import { Chapter, TradingCourse } from "./data/academy-progress-page.model";
import { ProgressCard } from "./progress-card";
import { LearningPath } from "./learning-path";
import { ActionCards } from "./action-cards";
import { QuickStats } from "./quick-stats";

interface AcademyProgressPageProps {
  course: TradingCourse;
}

export function AcademyProgressPage({ course }: AcademyProgressPageProps) {
  const [chapters, setChapters] = useState<Chapter[]>(course.chapters);

  const handleToggleExpand = (chapterId: string) => {
    setChapters((prev) =>
      prev.map((chapter) => ({
        ...chapter,
        isExpanded: chapter.id === chapterId ? !chapter.isExpanded : false,
      }))
    );
  };

  return (
    <main className="w-full max-w-[2400px]  mx-auto px-2 sm:px-6 lg:px-8 py-8">
      <ProgressCard progress={course.progress} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <div className="lg:col-span-2 w-full">
          <LearningPath chapters={chapters} onToggleExpand={handleToggleExpand} />
        </div>

        <div className="space-y-6 w-full">
          <ActionCards cards={course.actionCards} />
          <QuickStats stats={course.quickStats} />
        </div>
      </div>
    </main>
  );
}

export function IntradayDashboard({ course }: AcademyProgressPageProps) {
  return <AcademyProgressPage course={course} />;
}

export function ScalpingDashboard({ course }: AcademyProgressPageProps) {
  return <AcademyProgressPage course={course} />;
}

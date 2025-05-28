import { calculateProgress } from "@/lib/constants/utils/calculate-progress";
import { scalpingChapters } from "./chapters";
import { scalpingActionCards } from "./action-cards";
import { scalpingQuickStats } from "./quick-stats";
import { TradingCourse } from "../academy-progress-page.model";

export const scalpingCourse: TradingCourse = {
  id: "scalping",
  title: "Scalping Mastery",
  description: "Meistern Sie die Kunst des Scalping",
  icon: "Zap",
  iconColor: "text-red-600",
  chapters: scalpingChapters,
  progress: calculateProgress(scalpingChapters),
  actionCards: scalpingActionCards,
  quickStats: scalpingQuickStats,
}
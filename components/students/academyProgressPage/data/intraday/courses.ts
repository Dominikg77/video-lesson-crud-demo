import { calculateProgress } from "@/lib/constants/utils/calculate-progress";
import { intradayChapters } from "./chapters";
import { intradayActionCards } from "./action-cards";
import { intradayQuickStats } from "./quick-stats";
import { TradingCourse } from "../academy-progress-page.model";

export const intradayCourse: TradingCourse = {
  id: "intraday",
  title: "Intraday Trading Academy",
  description: "Lernen Sie professionelles Intraday Trading",
  icon: "TrendingUp",
  iconColor: "text-blue-600",
  chapters: intradayChapters,
  progress: calculateProgress(intradayChapters),
  actionCards: intradayActionCards,
  quickStats: intradayQuickStats,
}
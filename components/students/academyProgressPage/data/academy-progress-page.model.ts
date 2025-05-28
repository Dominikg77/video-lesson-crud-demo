import { LucideIcon } from "lucide-react"

export interface Chapter {
  id: string
  title: string
  description: string
  completed: boolean
  isActive?: boolean
  isExpanded?: boolean
  subChapters?: SubChapter[]
}

export interface SubChapter {
  id: string
  title: string
  completed: boolean
  isActive?: boolean
  description: string
}

export interface Progress {
  completedLessons: number
  totalLessons: number
  percentage: number
  remaining: number
}


export interface ActionCard {
  id: string;
  title: string;
  description: string;
  icon: string | LucideIcon;      // String-Name oder direkt Komponente
  buttonText: string;
  buttonVariant: "default" | "outline";
  buttonIcon: string | LucideIcon; // String-Name oder direkt Komponente
  iconColor: string;
  href?: string;
}
export interface QuickStats {
  learningTimeToday: string
  streak: string
}

export interface TradingCourse {
  id: string
  title: string
  description: string
  icon: string
  iconColor: string
  chapters: Chapter[]
  progress: Progress
  actionCards: ActionCard[]
  quickStats: QuickStats
}

// export interface ActionCard {
//   id: string
//   title: string
//   description: string
//   buttonText: string
//   buttonVariant: "default" | "outline"
//   icon: string
//   iconColor: string
//   href?: string
// }

export interface Progress {
  completedLessons: number
  totalLessons: number
  percentage: number
  remaining: number
}

export interface QuickStats {
  learningTimeToday: string
  streak: string
}

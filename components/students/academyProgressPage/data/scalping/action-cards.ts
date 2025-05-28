import { ScalpingRoutes } from "@/lib/constants/route-constant";
import { ActionCard } from "../academy-progress-page.model";

export const scalpingActionCards: ActionCard[] = [
  {
    id: "academy",
    title: "Scalping Academy",
    description: "Intensive Scalping Kurse",
    buttonText: "Kurse starten",
    buttonVariant: "default",
    icon: "GraduationCap",
    buttonIcon: "BookOpen",
    iconColor: "text-red-600",
    href: ScalpingRoutes.academy,
  },
  {
    id: "lessons",
    title: "Lessons",
    description: "Scalping Lessons",
    buttonText: "Scalping ansehen",
    buttonVariant: "outline",
    icon: "GraduationCap",
    buttonIcon: "Play",
    iconColor: "text-green-600",
    href: "#",
  },
  {
    id: "voice-over",
    title: "Voice Over",
    description: "Voice Over",
    buttonText: "Voice Over ansehen",
    buttonVariant: "outline",
    icon: "GraduationCap",
    buttonIcon: "MicVocal",
    iconColor: "text-purple-600",
    href: "#",
  },
];
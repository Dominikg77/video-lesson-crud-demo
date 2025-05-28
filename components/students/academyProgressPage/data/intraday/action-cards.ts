import { IntraDayRoutes } from "@/lib/constants/route-constant";
import { ActionCard } from "../academy-progress-page.model";

export const intradayActionCards: ActionCard[] = [
  {
    id: "academy",
    title: "Academy",
    description: "Zugang zu allen Intraday Kursen",
    buttonText: "Kurse ansehen",
    buttonVariant: "default",
    icon: "GraduationCap",
    buttonIcon: "BookOpen",
    iconColor: "text-blue-600",
    href: IntraDayRoutes.academy,
  },
  {
    id: "lessons",
    title: "Lessons",
    description: "Intraday Lessons",
    buttonText: "Lessons ansehen",
    buttonVariant: "outline",
    icon: "GraduationCap",
    buttonIcon: "Play",
    iconColor: "text-green-600",
    href: "#",
  },
  {
    id: "mentor",
    title: "Mentor Call",
    description: "Mentor Call aufzeichnungen",
    buttonText: "Mentor Call ansehen",
    buttonVariant: "outline",
    icon: "GraduationCap",
    buttonIcon: "Users",
    iconColor: "text-purple-600",
    href: "#",
  },
];
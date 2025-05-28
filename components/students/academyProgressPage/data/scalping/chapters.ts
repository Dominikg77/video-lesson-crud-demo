import { Chapter } from "../academy-progress-page.model";

export const scalpingChapters: Chapter[] = [
  {
    id: "1",
    title: "Phase 1: Scalping Onboarding",
    description: "In dieser Phase wird dir die Tralgo Academy vorgestellt",
    completed: true,
    isActive: true,
    isExpanded: false,
    subChapters: [
      { id: "1.1", title: "Onboarding", completed: true, description: "Lerne den Ablauf der Academy" },

    ],
  },
  {
    id: "2",
    title: "Phase 2: Scalping Grundverständnis",
    description: "In dieser Phase erhältst du das Basiswissen über die Börse und das Trading. ",
    completed: false,
    isExpanded: true,
    subChapters: [
      { id: "2.1", title: "Willkommen in der Phase Grundverständnis der Börse", completed: true, description: "Tauche ein in die Grundlage" },
      { id: "2.2", title: "Fundamentales Börsenverständnis", completed: false, description: "Baue dein Wissen über die fundamentalen Aspekte des Börsenhandels auf." },
    ],
  },
  {
    id: "3",
    title: "Phase 3: Scalping Einführung in die Technik",
    description: "In dieser Phase lernst du die technischen Grundlagen des Tradings kennen. Es wird dir gezeigt, wie du mit Atas arbeitest und den Broker / Datenfeed einstellst.",
    completed: false,
    isExpanded: false,
    subChapters: [
      { id: "3.1", title: "Willkommen in der Phase Einführung in die Technik", completed: false, description: "Erhalte eine Einführung in unsere Software und weitere technische Aspekte." },
    ],
  },
]
import {
  GraduationCap,
  BookOpen,
  Play,
  Users,
  MicVocal,
  LucideIcon,
} from "lucide-react";

// Mapping von String zu LucideIcon
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  Play,
  Users,
  MicVocal,
};

export function getIcon(icon: string | LucideIcon, fallback: LucideIcon = GraduationCap): LucideIcon {
  if (typeof icon === "string") {
    return iconMap[icon] ?? fallback;
  }
  return icon || fallback;
}
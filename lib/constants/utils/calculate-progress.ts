import { Chapter, Progress } from "@/components/students/academyProgressPage/data/academy-progress-page.model"


export const calculateProgress = (chapters: Chapter[]): Progress => {
  const totalLessons = chapters.reduce((acc, chapter) =>
    acc + (chapter.subChapters?.length || 1), 0)

  const completedLessons = chapters.reduce((acc, chapter) => {
    if (chapter.subChapters) {
      return acc + chapter.subChapters.filter(sub => sub.completed).length
    }
    return acc + (chapter.completed ? 1 : 0)
  }, 0)

  const percentage = Math.round((completedLessons / totalLessons) * 100)

  return {
    completedLessons,
    totalLessons,
    percentage,
    remaining: totalLessons - completedLessons,
  }
}

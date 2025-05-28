export function isWithinDateRange(targetDate: string, selectedDate: string, daysBack = 2): boolean {
  const selected = new Date(selectedDate)
  const target = new Date(targetDate)
  const daysDiff = Math.floor((selected.getTime() - target.getTime()) / (1000 * 60 * 60 * 24))

  return daysDiff >= 0 && daysDiff <= daysBack
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE")
}

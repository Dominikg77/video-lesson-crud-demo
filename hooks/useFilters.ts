"use client"

import { CalendarEvent, FilterState, NewsItem } from "@/components/students/tools-software/financialCalendar/financialCalendar.model"
import { isWithinDateRange } from "@/lib/constants/dateUtils"
import { useState, useMemo } from "react"

export function useFilters(newsData: NewsItem[], calendarEvents: CalendarEvent[]) {
  const [filters, setFilters] = useState<FilterState>({
    selectedDate: "2024-01-15",
    selectedCountries: ["USA", "EU"],
    selectedImportance: [1, 2, 3],
    calendarCategories: ["feiertag", "zinsentscheidung", "kpi", "kontraktwechsel"],
  })

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesDate = isWithinDateRange(news.date, filters.selectedDate)
      const matchesCountry = filters.selectedCountries.includes(news.country)
      const matchesImportance = filters.selectedImportance.includes(news.importance)

      return matchesDate && matchesCountry && matchesImportance
    })
  }, [newsData, filters.selectedDate, filters.selectedCountries, filters.selectedImportance])

  const filteredEvents = useMemo(() => {
    return calendarEvents.filter((event) => filters.calendarCategories.includes(event.category))
  }, [calendarEvents, filters.calendarCategories])

  const updateFilters = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }))
  }

  const handleCountryChange = (country: string, checked: boolean) => {
    const newCountries = checked
      ? [...filters.selectedCountries, country]
      : filters.selectedCountries.filter((c) => c !== country)
    updateFilters({ selectedCountries: newCountries })
  }

  const handleImportanceChange = (importance: number, checked: boolean) => {
    const newImportance = checked
      ? [...filters.selectedImportance, importance]
      : filters.selectedImportance.filter((i) => i !== importance)
    updateFilters({ selectedImportance: newImportance })
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.calendarCategories, category]
      : filters.calendarCategories.filter((c) => c !== category)
    updateFilters({ calendarCategories: newCategories })
  }

  return {
    filters,
    filteredNews,
    filteredEvents,
    updateFilters,
    handleCountryChange,
    handleImportanceChange,
    handleCategoryChange,
  }
}

export interface NewsItem {
  id: number
  country: string
  date: string
  time: string
  text: string
  link: string
  importance: 1 | 2 | 3
}

export interface CalendarEvent {
  id: number
  title: string
  date: string
  time: string
  category: "feiertag" | "zinsentscheidung" | "kpi" | "kontraktwechsel"
  importance: 1 | 2 | 3
  description: string
}

export interface FilterState {
  selectedDate: string
  selectedCountries: string[]
  selectedImportance: number[]
  calendarCategories: string[]
}

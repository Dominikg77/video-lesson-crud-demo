"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Filter, ChevronDown, ChevronUp } from "lucide-react"
import { DateFilter } from "./DateFilter"
import { CountryFilter } from "./CountryFilter"
import { ImportanceFilter } from "./ImportanceFilter"
import { CategoryFilter } from "./CategoryFilter"
import { FilterState } from "../financialCalendar.model"

interface FilterSectionProps {
  filters: FilterState
  isFilterOpen: boolean
  onFilterOpenChange: (open: boolean) => void
  onDateChange: (date: string) => void
  onCountryChange: (country: string, checked: boolean) => void
  onImportanceChange: (importance: number, checked: boolean) => void
  onCategoryChange: (category: string, checked: boolean) => void
}

export function FilterSection({
  filters,
  isFilterOpen,
  onFilterOpenChange,
  onDateChange,
  onCountryChange,
  onImportanceChange,
  onCategoryChange,
}: FilterSectionProps) {
  return (
    <Card>
      <Collapsible open={isFilterOpen} onOpenChange={onFilterOpenChange}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter & Einstellungen
              </span>
              {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <DateFilter value={filters.selectedDate} onChange={onDateChange} />

              <CountryFilter selectedCountries={filters.selectedCountries} onChange={onCountryChange} />

              <ImportanceFilter selectedImportance={filters.selectedImportance} onChange={onImportanceChange} />

              <CategoryFilter selectedCategories={filters.calendarCategories} onChange={onCategoryChange} />
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CALENDAR_CATEGORIES } from "../filterOptions"

interface CategoryFilterProps {
  selectedCategories: string[]
  onChange: (category: string, checked: boolean) => void
}

export function CategoryFilter({ selectedCategories, onChange }: CategoryFilterProps) {
  return (
    <div className="space-y-3 sm:col-span-2 lg:col-span-3">
      <Label className="text-base">Kalender Kategorien</Label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CALENDAR_CATEGORIES.map((category) => (
          <div key={category.id} className="flex items-center space-x-3">
            <Checkbox
              id={category.id}
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={(checked) => onChange(category.id, checked as boolean)}
              className="h-5 w-5"
            />
            <Label htmlFor={category.id} className="text-base">
              {category.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

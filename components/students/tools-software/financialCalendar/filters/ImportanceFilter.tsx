import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { IMPORTANCE_LEVELS } from "../filterOptions"

interface ImportanceFilterProps {
  selectedImportance: number[]
  onChange: (importance: number, checked: boolean) => void
}

export function ImportanceFilter({ selectedImportance, onChange }: ImportanceFilterProps) {
  return (
    <div className="space-y-3">
      <Label className="text-base">News Wichtigkeit</Label>
      <div className="space-y-3">
        {IMPORTANCE_LEVELS.map((level) => (
          <div key={level.id} className="flex items-center space-x-3">
            <Checkbox
              id={`importance-${level.id}`}
              checked={selectedImportance.includes(level.id)}
              onCheckedChange={(checked) => onChange(level.id, checked as boolean)}
              className="h-5 w-5"
            />
            <Label htmlFor={`importance-${level.id}`} className="text-base">
              {level.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

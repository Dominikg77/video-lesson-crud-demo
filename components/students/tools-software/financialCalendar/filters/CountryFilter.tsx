import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { COUNTRIES } from "../filterOptions"

interface CountryFilterProps {
  selectedCountries: string[]
  onChange: (country: string, checked: boolean) => void
}

export function CountryFilter({ selectedCountries, onChange }: CountryFilterProps) {
  return (
    <div className="space-y-3">
      <Label className="text-base">Länder</Label>
      <div className="space-y-3">
        {COUNTRIES.map((country) => (
          <div key={country.id} className="flex items-center space-x-3">
            <Checkbox
              id={country.id.toLowerCase()}
              checked={selectedCountries.includes(country.id)}
              onCheckedChange={(checked) => onChange(country.id, checked as boolean)}
              className="h-5 w-5"
            />
            <Label htmlFor={country.id.toLowerCase()} className="text-base">
              {country.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

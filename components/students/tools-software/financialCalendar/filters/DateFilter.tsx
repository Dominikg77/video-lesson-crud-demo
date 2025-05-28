"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DateFilterProps {
  value: string
  onChange: (date: string) => void
}

export function DateFilter({ value, onChange }: DateFilterProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor="date" className="text-base">
        Datum (zeigt 3 Tage)
      </Label>
      <Input id="date" type="date" value={value} onChange={(e) => onChange(e.target.value)} className="h-10" />
      <p className="text-xs text-muted-foreground">Zeigt News vom ausgewählten Tag und 2 Tage zurück</p>
    </div>
  )
}

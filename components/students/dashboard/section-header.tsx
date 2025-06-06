interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  )
}

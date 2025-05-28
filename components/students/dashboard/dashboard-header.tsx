interface DashboardHeaderProps {
  title: string
  description: string
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <div className="space-y-2 mb-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

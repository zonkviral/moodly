export const formatDate = (date: string) => {
  const d = new Date(date)
  const weekday = d.toLocaleDateString("en-US", { weekday: "short" })
  const monthDay = d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return { weekday, monthDay }
}

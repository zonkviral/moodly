import { moods } from "../constants/moods"

export const getMoodMeta = (label: string) => {
  const mood = moods.find((mood) => mood.label === label)
  if (!mood) throw new Error(`Unknown mood: ${label}`)
  return mood
}

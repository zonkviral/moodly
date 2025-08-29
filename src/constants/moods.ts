export const moods = [
  { emoji: "😀", label: "Happy", value: 5 },
  { emoji: "😐", label: "Neutral", value: 4 },
  { emoji: "😴", label: "Tired", value: 3 },
  { emoji: "😢", label: "Sad", value: 2 },
  { emoji: "😡", label: "Angry", value: 1 },
]
export type Mood = {
  emoji: string
  label: string
  value: number
}
export type MoodsLabel = (typeof moods)[number]["label"]

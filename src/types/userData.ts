import { MoodsLabel } from "../constants/moods"

export type MoodEntry = {
  id: string
  date: string
  mood: MoodsLabel
  note?: string
}

export type UserData = {
  moods: MoodEntry[]
  streak: number
  lastEntryDate?: string
  settings: {
    theme: "light" | "dark"
    notifications: boolean
  }
  premium: boolean
}

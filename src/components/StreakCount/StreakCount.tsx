import { Text } from "react-native"

export const StreakCounter = ({ days }: { days: number }) => (
  <Text className="text-lg pt-10">🔥 {days}-day streak</Text>
)

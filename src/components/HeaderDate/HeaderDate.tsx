import { Text } from "react-native"

export const HeaderDate = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  })
  return <Text className="text-black text-4xl leading-normal">{currentDate}</Text>
}

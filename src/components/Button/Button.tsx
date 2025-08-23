import { Pressable, Text } from "react-native"

type ButtonProps = {
  children: string
  onPressHandle: () => void
}

export const Button = ({ children, onPressHandle }: ButtonProps) => (
  <Pressable onPress={onPressHandle} className="bg-purple-400 px-14 py-4 rounded-2xl mt-10">
    <Text className="text-white text-center text-2xl">{children}</Text>
  </Pressable>
)

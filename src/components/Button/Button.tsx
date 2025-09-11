import { Pressable, Text } from "react-native"

type ButtonProps = {
  children: string
  onPressHandle: () => void
  className?: string
}

export const Button = ({ children, onPressHandle, className }: ButtonProps) => (
  <Pressable
    onPress={onPressHandle}
    className={`${className} bg-purple-400 px-14 py-4 rounded-2xl`}
  >
    <Text className="text-white text-center text-2xl">{children}</Text>
  </Pressable>
)

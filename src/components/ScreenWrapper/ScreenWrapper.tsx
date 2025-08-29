import { ReactNode } from "react"
import { SafeAreaView, View } from "react-native"

type Props = { children: ReactNode }

export const ScreenWrapper = ({ children }: Props) => {
  return (
    <SafeAreaView className="flex flex-col px-6 py-24">
      <View className="flex justify-center items-center gap-y-6">{children}</View>
    </SafeAreaView>
  )
}

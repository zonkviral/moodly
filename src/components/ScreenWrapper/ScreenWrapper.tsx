import { ReactNode } from "react"

import { View } from "react-native"

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

type Props = { children: ReactNode }

export const ScreenWrapper = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex flex-col px-6 py-24">
        <View className="flex justify-center items-center gap-y-6">{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

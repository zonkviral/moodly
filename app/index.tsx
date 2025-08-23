import { useState } from "react"
import { SafeAreaView, Platform, KeyboardAvoidingView, ScrollView } from "react-native"

import { HeaderDate } from "../src/components/HeaderDate/HeaderDate"
import { SectionTitle } from "../src/components/SectionTitle/SectionTitle"
import { MoodPicker } from "../src/components/MoodPicker/MoodPicker"
import { ReflectionInput } from "../src/components/ReflectionInput/ReflectionInput"
import { Button } from "../src/components/Button/Button"
import { StreakCounter } from "../src/components/StreakCount/StreakCount"

const Index: React.FC = () => {
  const [text, setText] = useState("")

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        keyboardVerticalOffset={80}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <HeaderDate />
          <SectionTitle>How are you feeling today?</SectionTitle>
          <MoodPicker />
          <ReflectionInput value={text} onChange={setText} />
          <Button onPressHandle={() => console.log("pressed")}>Save Today&apos;s Mood</Button>
          <StreakCounter days={3} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Index

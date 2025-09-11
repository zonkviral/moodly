import { Text, View } from "react-native"

import { ScreenWrapper } from "../../src/components/ScreenWrapper/ScreenWrapper"
import { SectionTitle } from "../../src/components/SectionTitle/SectionTitle"
import { Button } from "../../src/components/Button/Button"

const benefits = ["Fast performance", "Easy to use", "Cross-platform", "Great community support"]

const BenefitsList = () => {
  return (
    <View>
      {benefits.map((benefit, i) => (
        <View key={i} className="flex-row items-center mb-4 rounded-lg p-4 bg-white">
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>✓</Text>
          </View>
          <Text style={{ fontSize: 20 }}>{benefit}</Text>
        </View>
      ))}
    </View>
  )
}

const Premium = () => (
  <View className="flex-1 justify-center items-center">
    <ScreenWrapper>
      <Text className="text-4xl font-bold">Unlock Premium 🚀</Text>
      <SectionTitle>Support the app and get extra features</SectionTitle>
      <BenefitsList />
      <Button onPressHandle={() => console.log("proceed payment")}>Subscribe for $1/month</Button>
      <Text className="text-sm text-gray-500">Cancel anytime. First 3 days free</Text>
    </ScreenWrapper>
  </View>
)

export default Premium

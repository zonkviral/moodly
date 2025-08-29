import { Text, View, Dimensions, FlatList, ScrollView } from "react-native"
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryTheme,
} from "victory-native"

import { Mood, moods } from "../../src/constants/moods"
import UserData from "../../src/constants/FakeData.json"

import { MoodEntry } from "../../src/types/userData"

import { ScreenWrapper } from "../../src/components/ScreenWrapper/ScreenWrapper"
import { SectionTitle } from "../../src/components/SectionTitle/SectionTitle"

import { getMoodMeta } from "../../src/utils/getMoodMeta"
import { formatDate } from "../../src/utils/formatDate"

const screenWidth = Dimensions.get("window").width

const moodsMapEmoji = Object.fromEntries(moods.map((mood) => [mood.label, mood.emoji]))
const moodsMap: Mood[] = UserData.moods.map((m) => getMoodMeta(m.mood))

type MoodStatProps = {
  item: MoodEntry
}

const History = () => {
  const chartData = UserData.moods.map((mood, index) => {
    const { weekday, monthDay } = formatDate(mood.date)
    const moodMeta = moodsMap[index]

    return {
      x: index + 1,
      y: moodMeta.value,
      emoji: moodMeta.emoji,
      customlabel: `${weekday}\n(${monthDay})`,
    }
  })
  const chartStyles = {
    axis: { stroke: "rgba(0, 0, 0, 0.2)" },
    tickLabels: { fontSize: 18, fill: "#333" },
    grid: { stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 },
    scatterData: { fill: "#7c3aed", stroke: "#fff", strokeWidth: 2 },
    lineData: { stroke: "#7c3aed", strokeWidth: 3 },
    areaData: { fill: "rgba(124, 58, 237, 0.2)", stroke: "none" },
  }

  const MoodsStat = ({ item }: MoodStatProps) => (
    <>
      <View className="flex flex-row">
        <Text className="text-4xl">{moodsMapEmoji[item.mood]}</Text>
        <Text className="text-4xl">{item.mood}</Text>
      </View>
      <Text className="py-2">{item.note}</Text>
    </>
  )

  return (
    <ScreenWrapper>
      <Text className="text-xl font-bold mb-4">Mood History</Text>
      <ScrollView>
        <View className="flex flex-row-reverse justify-center mx-2">
          <View style={{ height: 300 }}>
            <VictoryChart
              width={screenWidth - 85}
              height={280}
              domain={{ y: [1, 5] }}
              padding={{ left: 15, top: 20, right: 40, bottom: 80 }}
              theme={VictoryTheme.material}
            >
              {/* X-axis with date labels */}
              <VictoryAxis
                tickFormat={(x) => chartData[x - 1]?.customlabel || ""}
                style={{
                  tickLabels: {
                    fontSize: 10,
                    fill: "#666",
                    textAnchor: "middle",
                  },
                  grid: { stroke: "rgba(0, 0, 0, 0.05)", strokeWidth: 1 },
                  axis: chartStyles.axis,
                }}
              />
              {/* Area under the line */}
              <VictoryArea
                data={chartData}
                style={{
                  data: chartStyles.areaData,
                }}
              />
              {/* Main line */}
              <VictoryLine
                data={chartData}
                style={{
                  data: chartStyles.lineData,
                }}
              />
              {/* Data points */}
              <VictoryScatter
                data={chartData}
                labels={({ datum }) => datum.emoji}
                style={{
                  data: chartStyles.scatterData,
                }}
              />
            </VictoryChart>
          </View>
          {/* Mood Legend */}
          <View className="mt-2">
            {[...moods].map((mood) => (
              <View
                className="flex flex-row p-2 mb-2 items-center bg-[rgba(124,58,237,0.1)] rounded-lg"
                key={mood.value}
              >
                <Text className="pr-2">{mood.emoji}</Text>
                <Text>{mood.label}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="bg-white rounded-lg p-4" style={{ minWidth: screenWidth - 25 }}>
          <FlatList
            data={UserData.moods}
            keyExtractor={(item) => item.id}
            renderItem={MoodsStat}
            scrollEnabled={false}
            ListHeaderComponent={
              <>
                <Text className="text-4xl">See your moods</Text>
                <SectionTitle>See how your moods have been</SectionTitle>
              </>
            }
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default History

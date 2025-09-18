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
      _x: index + 1,
      _y: moodMeta.value,
      emoji: moodMeta.emoji,
      customlabel: `${weekday}\n(${monthDay})`,
    }
  })
  const chartStyles = {
    axis: { stroke: "rgba(0, 0, 0, 0.2)" },
    tickLabels: { fontSize: 18, fill: "#333" },
    grid: { stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 },
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
        <View className="flex flex-col-reverse justify-center mx-2 self-center">
          <View style={{ height: 300 }}>
            <VictoryChart
              width={screenWidth - 50}
              height={280}
              domain={{ y: [1, 5] }}
              padding={{ left: 37, top: 30, right: 37, bottom: 80 }}
              theme={VictoryTheme.material}
            >
              {/* Y-axis with date labels */}
              <VictoryAxis
                dependentAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={(y) => {
                  const mood = moods.find((m) => m.value === y)
                  return mood ? mood.emoji : y
                }}
                style={{
                  axis: { stroke: "transparent" },
                  grid: { stroke: "rgba(0,0,0,0.05)" },
                }}
              />
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
                size={5} // dot size
                style={{
                  data: {
                    fill: "#7c3aed",
                    stroke: "white",
                    strokeWidth: 2,
                  },
                }}
              />
            </VictoryChart>
          </View>
          {/* Mood Legend */}
          <View className="mb-2 flex flex-row flex-wrap justify-center w-[80%] self-center">
            {[...moods].map((mood) => (
              <View
                className="flex flex-row p-2 mx-1 my-1 items-center bg-[rgba(124,58,237,0.1)] rounded-lg"
                key={mood.value}
              >
                <Text className="pr-2 text-base">{mood.emoji}</Text>
                <Text className="text-s">{mood.label}</Text>
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

import { useState } from "react"
import { FlatList, Pressable, Text } from "react-native"

import { moods } from "../../constants/moods"

type EmojiItemsProps = {
  item: (typeof moods)[number]
}

export const MoodPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)
  const handleSelect = (selected: string | null, emoji: { emoji: string; label: string }) => {
    console.log("Selected emoji:", emoji)
    selected && console.log("Selected:", selected)
    setSelectedEmoji(emoji.emoji)
  }
  const EmojiIntems = ({ item }: EmojiItemsProps) => (
    <Pressable
      onPress={() => handleSelect(selectedEmoji, item)}
      className="p-3 m-2 border rounded-full border-gray-400 text-center active:bg-gray-500 active:opacity-60"
    >
      <Text className="text-3xl">{item.emoji}</Text>
    </Pressable>
  )
  return (
    <FlatList
      className="pt-10"
      data={moods}
      keyExtractor={(item) => item.label}
      renderItem={EmojiIntems}
      horizontal
    />
  )
}

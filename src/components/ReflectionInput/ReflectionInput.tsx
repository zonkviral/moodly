import { TextInput } from "react-native"

type ReflectionInputProps = {
  value: string
  onChange: (text: string) => void
}

export const ReflectionInput = ({ value, onChange }: ReflectionInputProps) => (
  <TextInput
    className="w-96 min-h-24 max-h-40 border border-gray-300 rounded-md mt-10 p-3 text-base"
    multiline
    numberOfLines={4}
    maxLength={40}
    placeholder="Write a short reflection..."
    value={value}
    onChangeText={onChange}
    textAlignVertical="top"
  />
)

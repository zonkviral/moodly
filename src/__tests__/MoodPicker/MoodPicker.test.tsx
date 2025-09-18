import { render, fireEvent } from "@testing-library/react-native"

import { MoodPicker } from "../../components/MoodPicker/MoodPicker"

jest.mock("../../constants/moods", () => ({
  moods: [
    { emoji: "😀", label: "happy" },
    { emoji: "😐", label: "neutral" },
    { emoji: "😢", label: "sad" },
  ],
}))

describe("MoodPicker", () => {
  it("renders all mood emojis", () => {
    const { getByText } = render(<MoodPicker />)

    expect(getByText("😀")).toBeTruthy()
    expect(getByText("😐")).toBeTruthy()
    expect(getByText("😢")).toBeTruthy()
  })

  it("handles emoji selection", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation()
    const { getByText } = render(<MoodPicker />)

    fireEvent.press(getByText("😀"))

    expect(consoleSpy).toHaveBeenCalledWith("Selected emoji:", { emoji: "😀", label: "happy" })
    consoleSpy.mockRestore()
  })

  it("updates selected emoji when pressed", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation()
    const { getByText } = render(<MoodPicker />)

    fireEvent.press(getByText("😀"))

    fireEvent.press(getByText("😢"))

    expect(consoleSpy).toHaveBeenCalledWith("Selected:", "😀")
    consoleSpy.mockRestore()
  })
})

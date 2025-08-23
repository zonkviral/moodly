import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import Index from "../../app/index"

describe("Index screen", () => {
  it("renders the header date", () => {
    const { getByText } = render(<Index />)
    const currentDay = new Date().toLocaleString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    expect(getByText(currentDay)).toBeTruthy()
  })

  it("renders mood picker", () => {
    const { getByText } = render(<Index />)
    expect(getByText("😀")).toBeTruthy()
  })

  it("updates reflection input when typing", () => {
    const { getByPlaceholderText } = render(<Index />)
    const input = getByPlaceholderText("Write a short reflection...")
    fireEvent.changeText(input, "Hello world")
    expect(input.props.value).toBe("Hello world")
  })

  it("triggers button press", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {})
    const { getByText } = render(<Index />)
    fireEvent.press(getByText("Save Today's Mood"))
    expect(consoleSpy).toHaveBeenCalledWith("pressed")
    consoleSpy.mockRestore()
  })

  it("renders streak counter", () => {
    const { getByText } = render(<Index />)
    expect(getByText("🔥 3-day streak")).toBeTruthy()
  })
})

import { render, fireEvent } from "@testing-library/react-native"

import { Button } from "../../components/Button/Button"

describe("Button", () => {
  it("renders with correct text", () => {
    const mockOnPress = jest.fn()
    const { getByText } = render(
      <Button onPressHandle={mockOnPress}>Save Today&apos;s Mood</Button>,
    )

    expect(getByText("Save Today's Mood")).toBeTruthy()
  })

  it("calls onPressHandle when pressed", () => {
    const mockOnPress = jest.fn()
    const { getByText } = render(<Button onPressHandle={mockOnPress}>Test Button</Button>)

    fireEvent.press(getByText("Test Button"))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })

  it("applies custom className", () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(
      <Button onPressHandle={mockOnPress} className="mt-10">
        Test
      </Button>,
    )

    const button = getByTestId("button")
    expect(button.props.className).toContain("mt-10")
    expect(button.props.className).toContain("bg-purple-400")
  })
})

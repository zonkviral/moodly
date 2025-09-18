import { render, fireEvent } from "@testing-library/react-native"
import { ReflectionInput } from "../../components/ReflectionInput/ReflectionInput"

describe("ReflectionInput", () => {
  it("renders with correct placeholder", () => {
    const mockOnChange = jest.fn()
    const { getByPlaceholderText } = render(<ReflectionInput value="" onChange={mockOnChange} />)

    expect(getByPlaceholderText("Write a short reflection...")).toBeTruthy()
  })

  it("displays the provided value", () => {
    const mockOnChange = jest.fn()
    const { getByDisplayValue } = render(
      <ReflectionInput value="Test reflection" onChange={mockOnChange} />,
    )

    expect(getByDisplayValue("Test reflection")).toBeTruthy()
  })

  it("calls onChange when text changes", () => {
    const mockOnChange = jest.fn()
    const { getByPlaceholderText } = render(<ReflectionInput value="" onChange={mockOnChange} />)

    const input = getByPlaceholderText("Write a short reflection...")
    fireEvent.changeText(input, "New reflection text")

    expect(mockOnChange).toHaveBeenCalledWith("New reflection text")
  })

  it("respects maxLength of 40 characters", () => {
    const mockOnChange = jest.fn()
    const { getByPlaceholderText } = render(<ReflectionInput value="" onChange={mockOnChange} />)

    const input = getByPlaceholderText("Write a short reflection...")
    expect(input.props.maxLength).toBe(40)
  })
})

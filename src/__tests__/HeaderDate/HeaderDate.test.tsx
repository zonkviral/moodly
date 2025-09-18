import { render } from "@testing-library/react-native"

import { HeaderDate } from "../../components/HeaderDate/HeaderDate"

describe("HeaderDate", () => {
  it("renders current date in correct format", () => {
    const { getByText } = render(<HeaderDate />)
    const expectedDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    expect(getByText(expectedDate)).toBeTruthy()
  })
})

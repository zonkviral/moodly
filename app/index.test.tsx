import React from "react"
import { render } from "@testing-library/react-native"
import { Index } from "./index"

describe("Index screen", () => {
  it("renders welcome text", () => {
    const { getByText } = render(<Index />)
    expect(getByText("Welcome!")).toBeTruthy()
  })
})

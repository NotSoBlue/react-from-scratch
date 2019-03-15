import * as React from "react"
import { render, waitForElement } from "react-testing-library"

import { App } from "../app"
import { multiply } from "../app-helper"

describe("Test App Components", () => {
  it("renders the app, and the main title says dashboard", async () => {
    const { getByTestId } = render(<App />)

    await waitForElement(() => getByTestId("main-title"))
    expect(getByTestId("main-title")).toHaveTextContent(/Dashboard/)
  })
})

test("multiply two numbers", () => {
  expect(multiply({ n1: 5, n2: 5 })).toBe(25)
})

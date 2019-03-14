import * as React from "react"
import { render, waitForElement } from "react-testing-library"

import { multiply } from "../app-helper"
import { Sample } from "./react-component-sample"

it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByTestId } = render(<Sample text="Satoshi" />)
  await waitForElement(() => getByTestId("findme"))
  expect(getByTestId("findme")).toHaveTextContent(/satoshi/i)
})

test("multiply two numbers", () => {
  expect(multiply({ n1: 5, n2: 5 })).toBe(25)
})

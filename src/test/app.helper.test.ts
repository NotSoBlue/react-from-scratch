import { multiply } from "../app-helper"

test("multiply two numbers", () => {
  expect(multiply({ n1: 5, n2: 5 })).toBe(25)
})

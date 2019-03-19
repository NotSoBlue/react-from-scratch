import * as React from "react"
import { render, waitForElement } from "react-testing-library"

import { NavBar } from "../components/nav-bar"

describe("Test App Components", () => {
  it("renders the app, and the main title says dashboard", async () => {
    const { getByTestId } = render(<NavBar />)

    await waitForElement(() => getByTestId("navbar-main"))
    expect(getByTestId("navbar-main")).toHaveTextContent(/shore/)
  })
})

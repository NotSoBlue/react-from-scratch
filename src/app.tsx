import * as React from "react"
import { ThemeProvider } from "styled-components"

import { Dashboard } from "./components/dashboard"
import { NavBar } from "./components/nav-bar"
import { GlobalStyle } from "./styles/styles"

const App: React.SFC = (): JSX.Element => (
  <ThemeProvider theme={{ mode: "default" }}>
    <React.Fragment>
      <GlobalStyle />
      <main className="shore-main">
        <NavBar />
        <h1 data-testid="main-title" className="shore-main__title">
          Dashboard
        </h1>
        <Dashboard />
      </main>
    </React.Fragment>
  </ThemeProvider>
)

export { App }

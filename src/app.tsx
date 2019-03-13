import * as React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/styles"

const App: React.SFC = (): JSX.Element => (
  <ThemeProvider theme={{ mode: "default" }}>
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <main className="shore-main">
          <h1 className="shore-main__title">Dashboard</h1>
          <div className="shore-main__dashboard">
            <article className="dashboard__top-options">
              {/*  datepicker and download as PDF goes here */}
              <button type="button" className="shore-btn shore-btn--primary">
                Download as PDF
              </button>
            </article>
            <article className="dashboard__content">
              <section className="dashboard__wells">
                {/*  wells goes here */}
                <div className="mockwells">wells 1</div>
                <div className="mockwells">wells 2</div>
                <div className="mockwells">wells 3</div>
              </section>
              <section className="dashboard__content">
                {/* content goes here */}
              </section>
            </article>
          </div>
        </main>
      </div>
    </React.Fragment>
  </ThemeProvider>
)

export { App }

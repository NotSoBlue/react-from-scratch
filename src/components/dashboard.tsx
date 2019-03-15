import * as React from "react"
import styled, { css } from "styled-components"

const MainContainer = css`
  background: #fff;
  width: 1600px;
  margin: auto;
  min-height: 600px;
`

const StyledDashboard = styled.div`
  ${MainContainer}
`

const Dashboard: React.SFC = (): JSX.Element => (
  <StyledDashboard className="shore-main__dashboard">
    {/* <article className="dashboard__top-options" /> */}
  </StyledDashboard>
)

export { Dashboard }

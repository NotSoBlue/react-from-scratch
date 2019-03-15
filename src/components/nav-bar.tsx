import * as React from "react"
import styled from "styled-components"

import { NavMain } from "../styles/style-themes"

const { NavBarMainColor } = NavMain

const NavbarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${NavBarMainColor};
  width: 100%;
  height: 70px;
`

const NavBar: React.SFC = (): JSX.Element => (
  <NavbarMain data-testid="navbar-main">
    shore
    {/* <article className="dashboard__top-options" /> */}
  </NavbarMain>
)

export { NavBar }

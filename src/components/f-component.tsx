import * as React from "react"
import styled from "styled-components"

interface FComponentProps {
  name: string
  message: string
}

const TryMeDiv = styled.div`
  background: ${prop => prop.color};
`

const FComponent: React.SFC<FComponentProps> = ({
  name,
  message,
}): JSX.Element => (
  <TryMeDiv color="#fff">
    <h2>
      Hi! I`m {name}, I wanted to say that {message}
    </h2>
  </TryMeDiv>
)

export { FComponent }

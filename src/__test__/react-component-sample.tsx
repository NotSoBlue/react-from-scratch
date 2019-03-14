import * as React from "react"

interface SampleProps {
  text: string
}

const Sample: React.FunctionComponent<SampleProps> = ({
  text,
}): JSX.Element => <h1 data-testid="findme">{text}</h1>

export { Sample }

import * as React from "react"

interface DashboardProps {
  message: string
}

const Dashboard: React.FC<DashboardProps> = ({ message }): JSX.Element => {
  return (
    <div>
      <h1> {message} </h1>
    </div>
  )
}

export { Dashboard }

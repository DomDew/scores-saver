import React from "react"

export default function useForceRender() {
  const setC = React.useState(0)[1]
  return () => setC((c) => c + 1)
}
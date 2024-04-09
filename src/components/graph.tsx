import { useMemo } from "react";

type Props = {
  data: number[];
  strokeWidth?: number;
  spacing?: number;
  variant?: "green" | "blue" | "purple"
}

const Graph = ({ data, variant = "green", spacing = 30, strokeWidth = 4 }: Props) => {
  const maxValue = useMemo(() => data.reduce((max, curr) => curr > max ? curr : max), [data])
  const points = useMemo(() =>
    data.map((val, index) => {
      const x = index * spacing;
      const y = maxValue - val;
      return `${x},${y}`
    })
    , [data])

  return (
    <svg className="graph" viewBox={`-10 -10 ${points.length * spacing} ${maxValue + 10}`}>
      <defs>
        <linearGradient id="linear-gradient" x1="100%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: `var(--${variant}-500)` }} />
          <stop offset="100%" style={{ stopColor: "rgba(0, 0, 0, 0)" }} />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} stroke={`var(--${variant}-500)`} strokeWidth={strokeWidth} fill="url(#linear-gradient)" />
    </svg >
  )
}

export default Graph;

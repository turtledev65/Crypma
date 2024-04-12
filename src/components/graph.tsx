import { useMemo } from "react";

type Props = {
  data: number[];
  width?: number;
  height?: number;
  variant?: ColorVariant;
}

const Graph = ({ data, width = 150, height = 40, variant = "green" }: Props) => {
  if (data.length === 0)
    return

  const spacing = width / data.length;

  const maxValue = useMemo(() => Math.max(...data), [data])
  const minValue = useMemo(() => Math.min(...data), [data])

  const normalizedData = useMemo(() =>
    data.map((val) => {
      const diff = maxValue - minValue;
      const scaledVal = (val - minValue) / diff;
      return height - scaledVal * height;
    }),
    [data, maxValue, minValue]
  );
  const points = useMemo(() =>
    normalizedData.map((val, index) => {
      const x = index * spacing;
      return `${x},${val}`;
    }),
    [normalizedData]
  );


  return (
    <svg className="graph" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={`linear-gradient-${variant}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: `var(--${variant}-500)` }} />
          <stop offset="100%" style={{ stopColor: "rgba(0, 0, 0, 0)" }} />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} stroke={`var(--${variant}-500)`} strokeWidth={3} fill={`url(#linear-gradient-${variant})`} />
    </svg >
  )
}

export default Graph;

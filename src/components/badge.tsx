import { PropsWithChildren } from "react";

type Props = { variant?: ColorVariant } & PropsWithChildren;

const Badge = ({ variant = "green", children }: Props) => {
  return <span className={`badge badge--${variant}`}>{children}</span>
}

export default Badge;

import { PropsWithChildren } from "react";
import styles from "./badge.module.css";

type Props = { variant?: ColorVariant } & PropsWithChildren;

const Badge = ({ variant = "green", children }: Props) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
}

export default Badge;

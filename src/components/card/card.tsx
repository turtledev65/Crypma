import { PropsWithChildren } from "react";
import styles from "./card.module.css"

type Props = {
  variant?: ColorVariant
  className?: string
} & PropsWithChildren;

const Card = ({ variant = "blue", children, className }: Props) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;

import { PropsWithChildren } from "react";
import styles from "./button.module.css";

type Props = {
  outline?: boolean;
  onClick?: () => void;
} & PropsWithChildren

const Button = ({ outline, children, onClick }: Props) => {
  return <button className={`${styles.btn} ${styles[outline ? "outline" : "accent"]}`} onClick={onClick}>{children}</button>
}

export default Button;

import { PropsWithChildren } from "react";

type Props = {
  outline?: boolean;
  onClick?: () => void;
} & PropsWithChildren

const Button = ({ outline, children, onClick }: Props) => {
  return <button className={`btn btn--${outline ? "outline" : "accent"}`} onClick={onClick}>{children}</button>
}

export default Button;

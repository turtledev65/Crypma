import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
} & PropsWithChildren

const Button = ({ children, onClick }: Props) => {
  return <button className="btn btn--accent" onClick={onClick}>{children}</button>
}

export default Button;

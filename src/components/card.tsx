import { PropsWithChildren } from "react";

type Props = {
  variant?: "blue" | "purple" | "green";
} & PropsWithChildren;

const Card = ({ variant = "blue", children }: Props) => {
  return (
    <div className={`card card--${variant}`}>
      {children}
    </div>
  );
}

export default Card;

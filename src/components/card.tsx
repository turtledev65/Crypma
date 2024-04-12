import { PropsWithChildren } from "react";

type Props = {
  variant?: ColorVariant
  className?: string
} & PropsWithChildren;

const Card = ({ variant = "blue", children, className }: Props) => {
  return (
    <div className={`card card--${variant} ${className}`}>
      {children}
    </div>
  );
}

export default Card;

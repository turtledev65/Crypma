import { PropsWithChildren, useRef } from "react";
import styles from "./card.module.css"

type Props = {
  variant?: ColorVariant
  className?: string
} & PropsWithChildren;

const Card = ({ variant = "blue", children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleHover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.x + (rect.right - rect.x) / 2;
    const centerY = rect.y + (rect.bottom - rect.y) / 2;
    const dir = {
      x: Math.sign(e.clientX - centerX),
      y: Math.sign(e.clientY - centerY),
    }

    ref.current.style.setProperty("--shadow-offset-x", `${dir.x * 2}px`);
    ref.current.style.setProperty("--shadow-offset-y", `${dir.y * 2}px`);
  }

  return (
    <div onPointerMove={handleHover} ref={ref} className={`${styles.card} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;

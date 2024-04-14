import { PropsWithChildren, useEffect, useRef } from "react"
import styles from "./nav.module.css"

const Navbar = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const changeColor = () => {
      if (!ref.current) return;

      if (window.scrollY === 0) {
        ref.current.className = styles.nav;
        return;
      } else {
        ref.current.className = `${styles.nav} ${styles.filled}`;
      }
    }

    window.addEventListener("scroll", changeColor)

    return () => {
      window.removeEventListener("scroll", changeColor);
    }
  })

  return (
    <nav ref={ref} className={`${styles.nav}`} >
      {children}
    </nav >
  );
}

export default Navbar;

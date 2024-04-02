import { PropsWithChildren, useEffect, useRef } from "react"

const Navbar = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const changeColor = () => {
      if (!ref.current) return;

      if (window.scrollY === 0) {
        ref.current.className = "nav"
      } else {
        ref.current.className = "nav nav--filled"
      }
    }

    window.addEventListener("scroll", changeColor)

    return () => {
      window.removeEventListener("scroll", changeColor);
    }
  })

  return (
    <nav ref={ref} className="nav">
      {children}
    </nav>
  );
}

export default Navbar;

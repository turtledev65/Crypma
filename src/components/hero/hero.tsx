import { PropsWithChildren } from "react";
import styles from "./hero.module.css"

type Props = {
  backgroundImg?: string;
} & PropsWithChildren;

const Hero = ({ backgroundImg, children }: Props) => {
  return (
    <section className={styles.hero} >
      {backgroundImg && <>
        <img className="img-bg" src={backgroundImg} />
        <div className="overlay overlay--radial overlay--blue" />
      </>}
      {children}
    </section >
  )
}

export default Hero;

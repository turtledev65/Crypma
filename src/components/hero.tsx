import { PropsWithChildren } from "react";

type Props = {
  backgroundImg?: string;
} & PropsWithChildren;

const Hero = ({ backgroundImg, children }: Props) => {
  return (
    <section className="hero" >
      {backgroundImg && <>
        <img className="img-bg" src={backgroundImg} />
        <div className="overlay overlay--radial overlay--blue" />
      </>}
      {children}
    </section >
  )
}

export default Hero;

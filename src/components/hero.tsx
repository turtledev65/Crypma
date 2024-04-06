import { PropsWithChildren } from "react";

type Props = {
  backgroundImg?: string;
} & PropsWithChildren;

const Hero = ({ backgroundImg, children }: Props) => {
  return (
    <div className="hero" >
      {backgroundImg && <>
        <img className="img-bg" src={backgroundImg} />
        <div className="overlay overlay--radial overlay--blue" />
      </>}
      {children}
    </div >
  )
}

export default Hero;

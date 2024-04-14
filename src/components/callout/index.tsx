import { PropsWithChildren } from "react";
const Callout = (props: { backgroundImg?: string } & PropsWithChildren) => {
  return (
    <section className="block">
      {props.backgroundImg &&
        <>
          <img className="img-bg" src={props.backgroundImg} />
          <div className="overlay overlay--purple" />
        </>
      }
      {props.children}
    </section>
  );
}

export default Callout;

import Button from "./button";
const Callout = (props: { backgroundImg?: string }) => {
  return (
    <div className="block">
      {props.backgroundImg &&
        <>
          <img className="img-bg" src={props.backgroundImg} />
          <div className="overlay overlay--purple" />
        </>
      }
      <span className="title title--xl">Secure an Easy Way to Trade Online</span>
      <p>Sign up today to receive your free digital wallet. You can immediately start buying or selling Bitcoin, hassle-free.</p>
      <div className="mt-2">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Callout;

import Button from "./button";
import piggyBank from "../assets/piggybank.jpg"

const Callout = () => {
  return (
    <div className="p-5">
      <div className="callout">
        <img className="callout__bg" src={piggyBank} />
        <div className="callout__bg-overlay" />
        <h1>Secure an Easy Way to Trade Online</h1>
        <p>Sign up today to receive your free digital wallet. You can immediately start buying or selling Bitcoin, hassle-free.</p>
        <div className="mt-2">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Callout;

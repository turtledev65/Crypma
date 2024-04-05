import { FormEvent, useRef } from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__section">
          <Logo />
        </div>
        <div className="footer__section">
          <p className="footer__section__title">Exchange</p>
          <ul>
            <li><a className="link" href="#">Buy crypto</a></li>
            <li><a className="link" href="#">Market</a></li>
            <li><a target="_blank" className="link" href="https://en.wikipedia.org/wiki/Cryptocurrency">Learn crypto</a></li>
            <li><a className="link" href="#">Contact</a></li>
          </ul >
        </div >
        <div className="footer__section">
          <p className="footer__section__title">Contact</p>
          43252 Borer Mountains
          <br />
          Zackerychester
          <br />
          Bahamas
          <br />
          <br />
          732-528-4945
        </div >
        <div className="footer__section">
          <p className="footer__section__title">Newsletter</p>
          Subscribe our newsletter to get tips and more information about Crypma
          <EmailInput className="mt-1" onSubmit={(email) => console.log(`${email} subscribed to newsletter`)} />
        </div >
      </footer >
    </div>
  )
}

const EmailInput = (props: { className: string, onSubmit: (email: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const email = inputRef.current.value.trim().toLowerCase();
    if (!email) return
    props.onSubmit(email);
  }

  return (
    <form className={props.className} onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <input ref={inputRef} placeholder="Enter Your Email" type="email" className="input" />
        <button type="submit">{">"}</button>
      </div>
    </form>
  )
}

export default Footer;

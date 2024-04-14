import { FormEvent, useRef } from "react";
import Logo from "../logo";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div className={styles.section}>
        <Logo />
      </div>
      <div className={styles.section}>
        <p className="font-bold color-white">Exchange</p>
        <ul>
          <li><a className="link" href="#">Buy crypto</a></li>
          <li><a className="link" href="#">Market</a></li>
          <li><a target="_blank" className="link" href="https://en.wikipedia.org/wiki/Cryptocurrency">Learn crypto</a></li>
          <li><a className="link" href="#">Contact</a></li>
        </ul >
      </div >
      <div className={styles.section}>
        <p className="font-bold color-white">Contact</p>
        43252 Borer Mountains
        <br />
        Zackerychester
        <br />
        Bahamas
        <br />
        <br />
        732-528-4945
      </div >
      <div className={styles.section}>
        <p className="font-bold color-white">Newsletter</p>
        Subscribe our newsletter to get tips and more information about Crypma
        <EmailInput className="mt-1" onSubmit={(email) => console.log(`${email} subscribed to newsletter`)} />
      </div >
    </footer >
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

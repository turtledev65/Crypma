import { PropsWithChildren } from "react";
import styles from "./ordered-list.module.css";

export const OrderedList = (props: { className?: string } & PropsWithChildren) => {
  return (
    <ol className={`${styles.list} ${props.className ?? ""}`}>{props.children}</ol>
  )
}


export const OrderedListItem = (props: { title?: string } & PropsWithChildren) => {
  return (
    <li className={styles.item}>
      <div>
        {props.title && <span className="font-bold color-white">{props.title}</span>}
        {props.children}
      </div>
    </li>
  )
}

import { PropsWithChildren } from "react";
import styles from "./article.module.css"

export const ArticleContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export const Article = ({ title, body, imgSrc }: { title: string, body: string, imgSrc: string }) => {
  return (
    <article className={styles.article}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={imgSrc} />
      </div>
    </article>
  )
}

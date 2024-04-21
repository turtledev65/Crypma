import { Children, PropsWithChildren } from "react";
import styles from "./step-list.module.css"
import separatoImg from "../../assets/path.svg"


export const StepList = ({ children }: PropsWithChildren) => {
  const mappedChildren = Children.map(children, (child, i) => {
    if (i == Children.count(children) - 1)
      return child

    return (
      <>
        {child}
        <img className={styles.separator} src={separatoImg} />
      </>);
  })

  return (
    <div className={styles.list}>
      {mappedChildren}
    </div>
  );
}

export const StepListItem = ({ icon, title, children }: { icon: string, title: string } & PropsWithChildren) => {
  return (
    <div>
      <img className="icon" src={icon} />
      <p className={styles.counter}></p>
      <h3>{title}</h3>
      {children}
    </div>

  );
}

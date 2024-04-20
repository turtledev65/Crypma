import styles from "./logo.module.css"

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="#" className={`font-bold color-white ${className ?? ""}`}>
      <span className={styles.logo}>C</span>rypma
    </a>
  )
}

export default Logo;

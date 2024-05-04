import { Rocket } from "phosphor-react"
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Rocket className={styles.logo} />
      <span className={styles.text}>
        <span>to</span>do
      </span>
    </header>
  )
}
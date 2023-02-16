import styles from "./container.module.css"

export default function Container({ children }: any ) {
  return (
    <div className={styles.border}>
        <div className={styles.padding}>
            {children}
        </div>
    </div>
  )
}
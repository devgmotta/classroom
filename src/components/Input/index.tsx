import { ComponentProps } from "react"
import styles from "./styles.module.css"

type Props = ComponentProps<"input">

export function Input({ ...rest }: Props){
  return <input type="text" className={styles.input} {...rest} />
}




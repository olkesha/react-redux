import type { FC } from "react";
import type { TButtonProps } from "../../types/types";

import styles from './button.module.scss'

export const Button: FC<TButtonProps> = (props) => {
  const { type = 'button', children, onClick } = props;

  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
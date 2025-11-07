import type { FC } from "react";
import { Link } from "react-router-dom";

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}><h1>Header</h1></Link>
      <Link to={'/create-product'}>Let's create a product</Link>
    </header>
  )
}
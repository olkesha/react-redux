import type { FC } from "react";
import { Card } from "../card/card";

import styles from './card-container.module.scss';
import type { TProduct, TProducts } from "../../types/types";

export const CardContainer: FC<TProducts> = (props) => {
  const { products } = props;

  return (
    <ul className={styles.card__container}>
      {products.map((product: TProduct) => {
        return <Card key={product.id} product={product} />
      })}
    </ul>
  )
}
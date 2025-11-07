import type { FC } from "react";
import type { TCardInfoProps } from "../../types/types";

import styles from './card-info.module.scss';

export const CardInfo: FC<TCardInfoProps> = (props) => {
  const { title, image, description, price } = props;

  return (
    <article className={styles.card__content}>
      <img src={image} alt={title} className={styles.card__image} width={'100px'} height={'100px'}/>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
      <p className={styles.card__price}>${price}</p>
    </article>
  )
}
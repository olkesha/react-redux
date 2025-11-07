import type { FC } from "react";

import styles from './card.module.scss'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button/button";

export const Card: FC<any> = (props) => {
  const { product } = props;

  const location = useLocation();
  const dispatch = useDispatch();

  const fav = useSelector((state: any) => state.favoriteProducts);


  return (
    <li className={styles.card}>
      <Link 
        to={`/products/${product.id}`} 
        className={styles.card__content} 
        state={{from: location}}
      >
        <img src={product.image} alt={product.title} className={styles.card__image} width={'100px'} height={'100px'}/>
        <h3 className={styles.card__title}>{product.title}</h3>
        <div className={styles.card__buttons}>
          <Button 
            type={'button'}
            onClick={(e) => { 
              e.stopPropagation();
              e.preventDefault();
              if(fav.find((item: any) => item.id === product.id)) {
                dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product })
              } else {
                dispatch({ type: 'ADD_TO_FAVORITES', payload: product })
              }
            }}
          >Like</Button>
          <Button 
            type={'button'}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              fetch(`https://fakestoreapi.com/products/${product.id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(() => {
                  dispatch({ type: 'REMOVE_CARD', payload: product.id })
                })
                .catch(err => console.error(err))
            }}
          >Delete</Button>
        </div>
      </Link>
    </li>
  )
}
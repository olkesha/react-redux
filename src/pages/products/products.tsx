import { CardContainer } from "../../components/card-container/card-container"
import { useSelector } from "react-redux"
import { useState } from "react";

import styles from './products.module.scss'
import type { TInitialState } from "../../store";

export const Products = () => {

  const [isChecked, setIsChecked] = useState(false);

  const fav = useSelector((state: TInitialState) => state.favoriteProducts);
  const products = useSelector((state: TInitialState) => state.products);

  const showFavoriteProducts = (e: any) => {
    if(e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  return (
    <>
      <h2>Products Page</h2>
      <label className={styles.label}> Show favorite products
        <input className={`visually-hidden`} type={'checkbox'} onChange={showFavoriteProducts} />
      </label>
     
      <CardContainer products={isChecked ? fav : products}/>
    </>
  )
}
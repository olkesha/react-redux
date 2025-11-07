import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/button/button";
import { CardInfo } from "../../components/card-info/card-info";
import type { TInitialState } from "../../store";
import type { TCardInfoProps } from "../../types/types";

import styles from './product.module.scss';

export const Product = () => {
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const data = useSelector((state: TInitialState) => state.products);
  const card: TCardInfoProps = data.filter((item: TCardInfoProps) => item.id === Number(id))[0];
  
  return (
    <>
      <section className={styles.card__container}>
        <Button type={'button'} onClick={() => navigate(location.state?.from, { replace: true })}>Back</Button>
        <h2>Product's Info Page</h2>
        <CardInfo id={Number(id)} title={card.title} image={card.image} description={card.description} price={card.price} />
      </section>
    </>
  )
}
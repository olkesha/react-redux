import { useDispatch } from "react-redux";
import { Button } from "../../components/button/button";

import styles from './create-product.module.scss';

export const CreateProduct = () => {
  const dispatch = useDispatch();

  const validateForm = (e: any) => {
    const errors: any = {
      title: 'Поле title должно быть заполнено',
      description: 'Поле description должно быть заполнено',
      price: 'Поле price должно быть заполнено',
      image: 'Поле image должно быть заполнено',
    }

    Object.keys(errors).forEach(elem => {
      const spanElement = document.querySelector(`[data-error-message-${elem}]`) as HTMLSpanElement;
      if(!e.target.elements[elem].validity.valid) {
        spanElement.textContent = errors[elem];
      } else {
        spanElement.textContent = '';
      }
    })

    return e.target.elements.title.validity.valid && e.target.elements.description.validity.valid && e.target.elements.price.validity.valid && e.target.elements.image.validity.valid
  }

  const handleCreateProduct = (e: any) => {
    e.preventDefault();

    if (validateForm(e)) { 
      fetch('https://fakestoreapi.com/products', { 
        method: 'POST', 
        body: JSON.stringify({
          title: e.target.title.value, 
          image: e.target.image.value, 
          description: e.target.description.value, 
          price: e.target.price.value
        }) 
      });
      dispatch({
        type: 'ADD_NEW_PRODUCT', 
        payload: {
          id: Date.now(), 
          title: e.target.title.value, 
          image: e.target.image.value, 
          description: e.target.description.value, 
          price: e.target.price.value} 
      });
      console.log(`data have been sent`);
    } else {
      console.log(`data have not been sent`);
    }
  }

  return (
    <>
      <section className={styles.form__container}>
        <h2>Create Product Page</h2>
        <form className={styles.form} onSubmit={(e) => {handleCreateProduct(e)}} noValidate>
          <fieldset className={styles.fieldset}>
            <label htmlFor="title" className={styles.label}>Title:</label>
            <div className={styles.inputBlock}>
              <input 
                type="text" 
                name="title" 
                id="title" 
                className={styles.input} 
                required
              />
            <span data-error-message-title></span>
            </div>
            <label htmlFor="description" className={styles.label}>Description:</label>
            <div className={styles.inputBlock}>
              <textarea 
                name="description" 
                id="description" 
                className={styles.textarea} 
                rows={5} 
                maxLength={1000} 
                required
              />
              <span data-error-message-description></span>
            </div>
            <label htmlFor="price" className={styles.label}>Price:</label>
            <div className={styles.inputBlock}>
              <input 
                type="number" 
                name="price" 
                id="price" 
                className={styles.input} 
                required
              />
              <span data-error-message-price></span>
            </div>
            <label htmlFor="image" className={styles.label}>Image:</label>
            <div className={styles.inputBlock}>
              <input 
                type="url" 
                name="image" 
                id="image" 
                className={styles.input} 
                required
              />
              <span data-error-message-image></span>
            </div>
          </fieldset>
  
          <Button type="submit">Create</Button>
        </form>
      </section>
    </>
  )
}
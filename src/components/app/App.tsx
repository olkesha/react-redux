import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';


import { Header } from '../header/header';
import { CreateProduct } from '../../pages/create-product/create-product';
import { Products } from '../../pages/products/products';
import { Product } from '../../pages/product/product';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data }))
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path='/react-redux' element={<Products />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </main>
    </>
  )
}

export default App

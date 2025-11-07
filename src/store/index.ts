import { configureStore } from '@reduxjs/toolkit';
import type { TCardInfoProps } from '../types/types';

export type TInitialState = {
  products: TCardInfoProps[],
  favoriteProducts: TCardInfoProps[]
  success: boolean
}

const initialState: TInitialState = {
  products: [],
  favoriteProducts: [],
  success: false
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state, products: action.payload, success: true
      }
    case 'ADD_TO_FAVORITES':
      return {
        ...state, favoriteProducts: [...state.favoriteProducts, action.payload]
      }
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state, favoriteProducts: state.favoriteProducts.filter(product => product.id !== action.payload.id)
      }
    case 'REMOVE_CARD':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
        favoriteProducts: state.favoriteProducts.filter(product => product.id !== action.payload)
      }
    case 'ADD_NEW_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: rootReducer as any
})

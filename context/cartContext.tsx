import React from 'react'
import { ICart } from '../types/Cart';
import {IDispatchActionType} from './action'
import { cartReducer } from './cartReducer';


const CartContext = React.createContext<{
  state: ICart;
  dispatch: React.Dispatch<IDispatchActionType<unknown>>;
} | undefined>(undefined);

function CartProvider({children}) {
  const [state, dispatch] = React.useReducer(cartReducer, {
    checkoutIsOpen: false,
    cartIsOpen: false
  })
  // NOTE:  need to memoize this value
  const value = {state, dispatch}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export {CartProvider, useCart}

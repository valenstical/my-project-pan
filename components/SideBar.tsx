import { useState } from "react";
import { Cart } from "./Cart";
import { CheckOut } from "./CheckOut";
import { useCart } from "../context/cartContext";
import {
  addItemToCheckout,
  setAddCartView,
  setCheckoutView,
} from "../context/action";

export function SideBar() {
  const { state, dispatch } = useCart();
  const { cartIsOpen, checkoutIsOpen } = state;
  return (
    <div data-testid="cart-sidebar">
      <div className="sidebar__overlay" />
      {cartIsOpen && state.cartItem && (
        <Cart
          addItemToCheckOut={() => {
            dispatch(setAddCartView(false));
            dispatch(setCheckoutView(true));
            dispatch(addItemToCheckout(state.cartItem));
          }}
          cartItem={state.cartItem}
          addCartView={cartIsOpen}
          setAddCartView={(value) => dispatch(setAddCartView(value))}
          setCheckoutView={(value) => dispatch(setCheckoutView(value))}
        ></Cart>
      )}
      {state.checkOutitems && (
        <CheckOut
        setCheckoutView={(value) => dispatch(setCheckoutView(value))}
          checkOutitems={state.checkOutitems}
          checkoutView={checkoutIsOpen}
        ></CheckOut>
      )}
    </div>
  );
}

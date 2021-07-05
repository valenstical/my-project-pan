import { ICart } from '../types/Cart';
import { ADD_ITEM_TO_CHECKOUT, DECREASE_CHECKOUT_ITEM, PREVIEW_CART_ITEM, REMOVE_CHECKOUT_ITEM, SET_CART_VIEW, SET_CHECKOUT_VIEW } from "./constants";

// @TODO: move to file if this function gets bigger
// @TODO: use immer to copy state
let copyOfCheckoutItems
export function cartReducer(state: ICart, action): ICart {
  switch (action.type) {
    case PREVIEW_CART_ITEM:
      return {
        ...state,
        cartItem: action.payload
      };
    case ADD_ITEM_TO_CHECKOUT:
      let newItem = { ...action.payload };
      copyOfCheckoutItems = { ...state.checkOutitems };
      // we want to increment if this item is already in 
      // the cart.
      if (state.checkOutitems && state.checkOutitems[action.payload.id]) {
        copyOfCheckoutItems[action.payload.id].quantity += 1;
      } else {
        copyOfCheckoutItems[action.payload.id] = newItem;
        copyOfCheckoutItems[action.payload.id].quantity = 1;
      }
      return {
        ...state,
        checkOutitems: {
          ...state.checkOutitems,
          ...copyOfCheckoutItems
        }
      };
    case REMOVE_CHECKOUT_ITEM:
      copyOfCheckoutItems = { ...state.checkOutitems };
      delete copyOfCheckoutItems[action.payload.id]
      return {
        ...state,
        checkOutitems: {
          ...copyOfCheckoutItems
        }
      };
    case DECREASE_CHECKOUT_ITEM:
      copyOfCheckoutItems = { ...state.checkOutitems };
      if (state.checkOutitems[action.payload.id].quantity > 1) {
        copyOfCheckoutItems[action.payload.id].quantity -= 1;
      } else {
        delete copyOfCheckoutItems[action.payload.id]
      }
      return {
        ...state,
        checkOutitems: {
          ...copyOfCheckoutItems
        }
      };
    case SET_CART_VIEW:
      return {
        ...state,
        cartIsOpen: action.payload
      };
    case SET_CHECKOUT_VIEW:
      return {
        ...state,
        checkoutIsOpen: action.payload
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

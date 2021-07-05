import { ICart, ICartItem } from "../types/Cart";
import { DECREASE_CHECKOUT_ITEM, ADD_ITEM_TO_CHECKOUT, REMOVE_CHECKOUT_ITEM, SET_CART_VIEW, SET_CHECKOUT_VIEW, PREVIEW_CART_ITEM } from "./constants";


export interface IDispatchActionType<T> {
  type: string,
  payload: T
}

export type IDispatchActionCreator<T> = (payload: T) => IDispatchActionType<T>

export const setCheckoutView: IDispatchActionCreator<boolean> = (payload) => ({
  type: SET_CHECKOUT_VIEW,
  payload
})
export const setAddCartView: (payload: boolean) => IDispatchActionType<boolean> = (payload) => ({
  type: SET_CART_VIEW,
  payload
})

export const setItemToPreview: (payload: ICartItem) => IDispatchActionType<ICartItem> = (payload) => ({
  type: PREVIEW_CART_ITEM,
  payload
})

export const addItemToCheckout: (payload: ICartItem) => IDispatchActionType<ICartItem> = (payload) => ({
  type: ADD_ITEM_TO_CHECKOUT,
  payload
})

export const removeItemFromCart: (payload: ICartItem) => IDispatchActionType<ICartItem> = (payload) => ({
  type: REMOVE_CHECKOUT_ITEM,
  payload
})

export const decreaseItemFromCart: (payload: ICartItem) => IDispatchActionType<ICartItem> = (payload) => ({
  type: DECREASE_CHECKOUT_ITEM,
  payload
})
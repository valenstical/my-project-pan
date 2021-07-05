import { IProduct } from "./Product";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICart {
  currency?: string
  checkOutitems?: {
    [index: number]: ICartItem;
  };
  cartItem?: ICartItem
  checkoutIsOpen?: boolean;
  cartIsOpen?: boolean;
}

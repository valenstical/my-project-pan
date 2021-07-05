import React from "react";
import { IProduct } from "../types/Product";
import {useCart} from '../context/cartContext'
import { addItemToCart, setAddCartView, setItemToPreview } from "../context/action";

interface IProductItemProps {
  product: IProduct
}
export default function ProductItem(props: IProductItemProps) {

  const {dispatch} = useCart()

  function handleAddItemToCart (item) {
    dispatch(setAddCartView(true))
    dispatch(setItemToPreview(item))
  }

  return (
    <div className="md:w-1/3 sm:w-1/2">
      <div data-testid="product-item" className="product__item">
        <div className="item__media">
          <a
            className=""
            href={`/products/${props.product.id}`}
          />
          <a className="product__link">
            <img
              className="img"
              alt="Age Management Set"
              src={props.product.image_url}
            />
            <h2 className="product__title">{props.product.title}</h2>
          </a>
        </div>
        <div className="css-1o2ui0u">
          <p className="product__price">${`${props.product.price}`}</p>
        </div>
        <button data-testid="addtocart-btn" type="button" className="item__button" onClick={() => handleAddItemToCart(props.product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

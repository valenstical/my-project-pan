import { ICartItem } from "../types/Cart";
import { useCart } from "../context/cartContext";
import {
  addItemToCheckout,
  decreaseItemFromCart,
  removeItemFromCart,
  setAddCartView,
  setCheckoutView,
} from "../context/action";
export function CartItem(props: ICartItem) {
  const { state, dispatch } = useCart();

  return (
    <div className="list__item cart__item">
      <div className="item__description">
        <span
          className="remove__item"
          style={{
            cursor: "pointer",
          }}
        >
          x
        </span>
        <h6>{
          props.title
          }</h6>
        <div />
        <div className="d-none">
          <span className="d-block">
            Two Month <span>supply shipped every two months</span>.
          </span>
          <span>Cancel or change frequency anytime</span>
        </div>
        <div>
          <span>One time purchase of</span> Two Month <span>supply</span>.
        </div>
        <div className="counter__quantity">
          <div className="quantity__selector">
            <span className="selector__action decrement" onClick={() => {
              if (props.quantity > 1) {
                // decrement
                dispatch(decreaseItemFromCart(props))
              } else {
                // remove
                dispatch(removeItemFromCart(props))
              }
            }}>-</span>
            <span className="counter__number selector"> {props.quantity || 0} </span>
            <span className="selector__action increment" onClick={() => {
              // just add again 
              dispatch(addItemToCheckout(props))
            }}>+</span>
          </div>
          <div className="quantity__price">US${
            props.price
          }</div>
        </div>
      </div>
      <div className="item__image">
        <img
          src={props.image_url}
          alt="Product Image" />
      </div>
    </div>
  );
}

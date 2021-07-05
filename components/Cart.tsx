import React from 'react'
import { ICartItem } from '../types/Cart';

interface ICartProps {
  addCartView: any;
  cartItem : ICartItem
  setAddCartView: (arg0: boolean) => void;
  setCheckoutView: (arg0: boolean) => void;
  addItemToCheckOut: () => void
}
export function Cart(props: ICartProps) {
  return (
    <form
      data-testid="cart-items"
      className={`sidebar__cart translate-cart ${props.addCartView && "open"}`}
    >
      <div className="mb-18 flex flex-row item-summary">
        <div>
          <div
            onClick={() => props.setAddCartView(false)}
            className="sidebar__button--close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 492.004 492.004"
              style={{
                height: 15,
                width: 10,
                fill: "rgb(43, 46, 43)",
              }}
            >
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
            </svg>
          </div>
        </div>
        <div className="flex w-1/3 pt-5">
          <img
            src={props.cartItem.image_url}
            style={{
              maxHeight: 60,
            }} />
        </div>
        <div />
      </div>
      <div className="personalize-product">
        <h4
          style={{
            marginBottom: 20,
          }}
        >
          First, let's personalize.
        </h4>
        <h5
          style={{
            marginBottom: 30,
          }}
        >
          Products that you receive may vary according to your age bracket &amp;
          skin type to optimize results.
        </h5>
        <h6>Personalization Details</h6>
        <div className="variant-form" />
      </div>
      <div className=" pt-0 px-5 pb-5">
        <div className="flex flex-col mb-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.setAddCartView(false);
              props.setCheckoutView(true);
              props.addItemToCheckOut()
            }}
            type="submit"
            className="checkout-btn"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </form>
  );
}

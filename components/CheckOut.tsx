import { ICartItem } from "../types/Cart";
import { CartItem } from "./CartItem";
import { CurrencySelectRow } from "./CurrencySelectRow";

export function CheckOut(props: {
  checkOutitems: {
    [index: number]: ICartItem;
  };
  checkoutView: boolean;
  setCheckoutView?: (arg0: boolean) => void;
}) {
  return props.checkOutitems && (
    <form
      data-testid="sidebar-checkout"
      className={`sidebar__cart translate-cart ${props.checkoutView && "open"}`}
      id="cart-form"
    >
      <div
        className="in-cart-overlay"
        style={{
          display: "none",
        }}
      />
      <div className="mb-18 flex flex-row item-summary">
        <div>
          <div
            onClick={() => props.setCheckoutView(false)}
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
        <div>
          <h5 className="cart__title">YOUR CART</h5>
        </div>
        <div />

        <div />
      </div>
      <CurrencySelectRow></CurrencySelectRow>
      <div className="cart__list">
        <div className="mt-3">
          {Object.keys(props.checkOutitems).map((itemKey) => {
            return (
              <CartItem
                key={itemKey}
                {...props.checkOutitems[itemKey]}
              ></CartItem>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="cart__subtotal">
          <span>Subtotal</span>
          <div className="subtotal-price">
            USD$
            {Object.values(props.checkOutitems)
              .map((p) => p.price * p.quantity)
              .reduce((p, n) => (p + n), 0)}
            
          </div>
        </div>
        <div className="cart__submit flex flex-col">
          
          <button
            type="submit"
            className="checkout-btn"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </footer>
    </form>
  );
}

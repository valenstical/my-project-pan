import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import {CartProvider} from '../context/cartContext'


// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
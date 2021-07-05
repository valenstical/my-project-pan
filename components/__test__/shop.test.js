import React from "react";
import { render, screen } from "../../test/test-utils";
import {ShopProducts} from "../ShopProducts";

const products =[
  {
    id: 1,
    title: 'This is a product',
    image_url: 'https://great.ixit.com/image.png',
    price: 3
  }
  
]

describe('shop page should display products', () => {
  test("should show shop", () => {
    const {getByTestId} = render(<ShopProducts products={products} />)
    const shopEle = getByTestId('shop-page')

    expect(shopEle).toBeDefined()
    expect(shopEle.querySelectorAll('.product__item').length).toBeGreaterThan(0)
  })

})


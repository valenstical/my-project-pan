import React from "react";
import { render, screen } from "../../test/test-utils";
import ProductItem from '../ProductItem'
import {TopHeader} from '../TopHeader.jsx'
import {SideBar} from '../SideBar'

const product = {
  id: 1,
  title: 'This is a product',
  image_url: 'https://great.ixit.com/image.png',
  price: 3
}

test("should show a product", () => {
  const {getByTestId} = render(<ProductItem product={product} />)
  const productItemEle = getByTestId("product-item")

  expect(productItemEle.children).toBeDefined()
  expect(productItemEle.children.length).toBe(3)
  expect(productItemEle.querySelector('.product__title').innerHTML.length).toBeGreaterThan(0)
  expect(productItemEle.querySelector('.product__price').innerHTML.length).toBeGreaterThan(0)
})



import React from "react";
import { render, screen } from "../../test/test-utils";
import { CheckOut } from "../CheckOut";

const checkoutItems =   {
    "3": {
      "id": 3,
      "title": "Premium-Grade Moisturizing Balm",
      "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
      "price": 29
    }
  }


test("should show a list of items listed", () => {
  const {getByTestId} = render(<CheckOut checkoutView={true} checkOutitems={checkoutItems} />)
  const cartEle = getByTestId('sidebar-checkout')

  expect(cartEle).toBeDefined()
  expect(cartEle.querySelectorAll('.cart__item').length).toBeGreaterThan(0)
})
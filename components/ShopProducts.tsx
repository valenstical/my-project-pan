import React from 'react'
import { IProduct } from '../types/Product'
import ProductItem from './ProductItem'
 
interface IShopProductsProps {  
  products: IProduct[]
}
export function ShopProducts (props: IShopProductsProps) {

  return (
    <div data-testid="shop-page" className="flex products__grid">
      {
        props.products && props.products.length && props.products.slice(0, 6).map((product, key) => <ProductItem key={key} product={product} />)
      }
    </div>
  )
}
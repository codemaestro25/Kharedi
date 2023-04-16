import React from 'react'
import './ProductList.scss'
import Product from '../Product/Product'

function ProductList({products}) {
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
      {
        products.map(product => {
          let price = product.price;
          return (
            <Product key= {product.id} product = {{ ... product, price}}/>
          )
        })
      }
    </div>
  )
}

export default ProductList
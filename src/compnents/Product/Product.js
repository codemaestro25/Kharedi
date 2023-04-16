import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/currency'
import './Product.scss';

function Product({product}) {
  return (
    <Link to = {`/product/${product?.id}`} key = {product?.id}>
        <div className="product-item bg-white">
            <div className="category">
                {product?.category}
            </div>
            <div className="product-item-img">
                <img src= {product?.image} alt= {product.title} className="img-cover" /></div>
        </div>
        <div className="product-item-info fs-14">
            <div className="title">
                <span className='fw-7'>{product?.title}</span>
            </div>
            <div className="price flex align-center justify-center">
                {(formatPrice(product?.price))}
            </div>
        </div>
    </Link>
  )
}

export default Product
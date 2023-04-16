import React from 'react'
import './CartModal.scss';
import { emptyCart } from '../../utils/images';
import { formatPrice } from '../../utils/currency';

function CartModel({cart}) {
  return (
   <div className="cart-modal">
    <h5 className="cart-modal-title fw-5 fs-15 font-manrope text-center">Your Cart items</h5>
   {
    cart.length>0 ? (<div>
      <div className="cart-modal-list grid">
        {
          cart.map(cartItem => {
            return(
              <div className="cart-modal-item grid align-center font-manrope py-2" key = {cartItem.id}>
                <div className="cart-modal-item-img"><img src={cartItem?.image} alt="itemImage" className="img-cover" />
                </div>
                <div className="cart-modal-item-title fs-13 font-manrope text-capitalize">{cartItem?.title}
                </div>
                <div className="cart-modal-item-price text-blue fs-15 fw-6">
                  {formatPrice(cartItem?.price)}
                </div>
              </div>

            )
          })
        }
      </div>
      <div className="text-capitalize view-cart-btn bg-blue fs-16 font-manrope text-center">
        View Cart
      </div>
    </div>) : (
      <div className="flex flex-column align-center justify-center cart-modal-empty">
        <img src={emptyCart} alt="man with  empty cart"/>
        <h6 className="text-dark fw-4">Your Cart feels lonely :(</h6>
      </div>
    )
   }
   </div>
  )
}

export default CartModel
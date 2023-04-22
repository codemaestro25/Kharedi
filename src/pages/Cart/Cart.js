import React, { useState } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import {emptyCart } from "../../utils/images";
import { formatPrice } from "../../utils/currency";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,

} from "../../store/cartSlice";


import Pagination from "../../compnents/Pagination/Pagination";

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector(getAllCarts);
  const { itemCount, totalAmount } = useSelector((state) => state.cart); //destructuring the itemcount and total price from the cart object

  // for pagination component
  const [currentPage, setCurrentPage] = useState(1)
   
  const pageSize = 3

  const indexOfLastRecord = currentPage * pageSize;
  const indexOfFirstRecord = indexOfLastRecord - pageSize;
  const cart = data.slice(indexOfFirstRecord, indexOfLastRecord); // for displaying the limited cart items on the page we have taken special var for the cart




  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column">
          <div className="text-blue fs-35 fw-5">
            {" "}
            Cart is feeling lonely : (
          </div>
          <div className="text-gray fs-23 fw-5 my-4">
            {" "}
            <h2>Please add something in your cart</h2>
          </div>

          <img src={emptyCart} alt="Image" />
        </div>
      </div>
    );
  }
  return (
    <div className="contianer">
      <div className="cart bg-whitesmoke">
        <div className="container">
          <div className="cart-ctable">
            {/* table headings */}
            <div className="cart-chead bg-white">
              <div className="cart-ctr fw-6 font-manrope fs-15">
                <div className="cart-cth">
                  <span className="cart-ctxt">Sr.No</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Item</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Price</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Quantity</span>
                </div>
                <div className="cart-cth">
                  <span className="cart-ctxt">Total Price</span>
                </div>
              </div>
            </div>

            {/* table entries */}
            <div className="cart-cbody bg-white">
              {cart.map((cartItem, idx) => {
                return (
                  <div className="cart-ctr py-4" key={cartItem?.id}>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{(idx-2)+currentPage*pageSize}</span>
                    </div>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">{cartItem?.title}</span>
                    </div>
                    <div className="cart-ctd">
                      <span className="cart-ctxt">
                        {formatPrice(cartItem?.price)}
                      </span>
                    </div>
                    <div className="cart-ctd">
                      <div className="qty-change flex align-cneter">
                        <button
                          className="qty-decrease flex align-center justify-center"
                          onClick={() =>
                            dispatch(
                              toggleCartQty({ id: cartItem?.id, type: "DEC" })
                            )
                          }
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="qty-value flex align-center justify-center">
                          {cartItem?.quantity}
                        </div>

                        <button
                          className="qty-increase flex align-center justify-center"
                          onClick={() =>
                            dispatch(
                              toggleCartQty({ id: cartItem?.id, type: "INC" })
                            )
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="cart-ctd">
                      <span className="cart-ctxt text-blue fw-5">
                        {formatPrice(cartItem?.totalAmount)}
                      </span>
                    </div>
                    <div className="cart-ctd">
                      <button
                        className="delete-btn px-4"
                        onClick={() => dispatch(removeFromCart(cartItem?.id))}
                      >
                        <span>
                          <i className="fas fa-trash "></i>
                        </span>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='cart-cfoot flex align-start justify-between py-3 bg-white'>
            <div className='cart-cfoot-l'>
            </div>
              

            <div className='cart-cfoot-r flex flex-column justify-end'>
              <div className='total-txt flex align-center justify-end'>
                <div className='font-manrope fs-23 fw-5 mx-2'>{itemCount} items: </div>
                <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
              </div>

              <button type = "button" className='checkout-btn text-white bg-blue fs-16'>Check Out</button>
            </div>
          </div>
          </div>
          <Pagination totalResults={itemCount} pageSize={pageSize} currentPage={currentPage}  setCurrentPage={setCurrentPage}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";
import "./ProductView.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncSingleProduct,
  getSingleProduct,
  getSingleProductStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../compnents/Loader/Loader";
import { currency, formatPrice } from "../../utils/currency";
function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getSingleProduct);
  const productStatus = useSelector(getSingleProductStatus);

  // getting an individual product
  useEffect(() => {
    dispatch(fetchAsyncSingleProduct(id));
  }, []);

  const [quantity, setQuantity] = useState(1);

  if (productStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () =>{
    setQuantity((prevQty)=>{
      return prevQty+1;
    })
  }
  const decreaseQty = ()=> {
    setQuantity((prevQty)=>{
      return prevQty===0? 0 : prevQty-1;
      
    })
  }
  return (
    <main className="py-5 bg-whitesmoke">
      <div className="product-single">
        <div className="container">
          <div className="product-single-content bg-white grid">
            <div className="product-single-l">
              <div className="product-img">
                <div className="product-img-zoom">
                  <img
                    className="img-cover"
                    src={product?.image}
                    alt={product.title}
                  />
                </div>
              </div>
            </div>

            {/* product details */}
            <div className="product-single-r">
              <div className="product-details font-manrope">
                <div className="title fs-20 fw-6">{product?.title}</div>
                <div>
                  <p className="para fw-13 fs-15">{product?.description}</p>
                </div>
                {/* rating and catgory section */}
                <div className="info flex align-center flex-wrap fs-15">
                  <div className="rating my-3">
                    <span className="fs-19 text-blue fw-5">Rating: </span>
                    <span className="fs-19 mx-1 fw-6 ls-1h">
                      {product?.rating?.rate}
                    </span>
                  </div>
                  <div className="vert-line-b"></div>
                  <div className="rating my-3">
                    <span
                      className="fs-14 text-blue fw-5 "
                      style={{ marginLeft: "5px" }}
                    >
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="fs-15 mx-2 fw-6 ls-1h">
                      {product?.rating?.count}
                    </span>
                  </div>
                  <div className="vert-line-b"></div>
                  <div className="brand">
                    <span className="text-blue">Category:</span>
                    <span className="mx-2 fs-16 fw-3">{product?.category}</span>
                  </div>
                </div>
                <div className="price">
                  <div className="flex align-center my-1">
                    <div className="font-poppins fs-26 fw-6 text-blue">
                      {formatPrice(product?.price)}
                    </div>
                  </div>
                </div>
                {/* quantity section */}
                <div className="qty flex align-center my-4">
                  <div className="qty-text">Quantity</div>
                  <div className="qty-change flex aling-center mx-6">
                  <button onClick={()=> increaseQty()}>
                      <div className= "qty-increase flex align-center justify-center">
                        <i className="fas fa-plus"></i>
                      </div>
                    </button>
                    <div className="qty-value flex align-center justify-center">
                      {quantity}
                    </div>
                    <button onClick={()=>decreaseQty()}>
                      <div className="qty-decrease flex align-center justify-center">
                        <i className="fas fa-minus"></i>
                      </div>
                    </button>
                  
                  </div>

                </div>
                <div className="btns flex justify-between my-6 ">
                  <button className=" btn add-to-cart-btn "><i className="fas fa-shopping-cart"></i>
                <span className="btn-text mx-2">
                  Add to Cart
                </span>
                </button>
                <button className="buy-now btn mx-3">
                  <span className="btn-text">Buy Now</span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductView;

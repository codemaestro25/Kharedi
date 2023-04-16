import React , {useEffect} from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getSidebarStatus, setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";
import { getAllCarts, getCartItemsCount, getCartTotal } from "../../store/cartSlice";
import CartModal from "../CartModal/CartModal";


function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const cart = useSelector(getAllCarts);
  const itemCount = useSelector(getCartItemsCount);

  // to get the total cart items nad their total price exported from cartSlice
  useEffect(()=>{
    dispatch(getCartTotal())
  }, [cart])

  
  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
      <button type = "button" className='sidebar-show-btn text-white' onClick={()=> dispatch(setSidebarOn())}>
            <i className='fas fa-bars'></i>
          </button>
          <Link to = "/" className='navbar-brand flex align-center text-white'>
          <span className='navbar-brand-txt mx-2'>
              <span className='fs-35 mx-4'>Kharedi</span>
            </span>
            </Link>
     
      <div className="navbar-collapse w-100">
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type = "text" className='form-control fs-14' placeholder='Your Desires'/>
              <Link to = '' className='text-white search-btn flex align-center justify-center'>
                  <i className='fa fa-magnifying-glass'></i>
                </Link>
            </div>
          </div>
          </div>

          </div>

          <div className="navbar-cart flex align-center">
            <Link to = '/cart'className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="cart-items-value">{itemCount}</div>
              <CartModal cart = {cart}/>
            </Link>
          </div>
        

    </nav>
  );
}

export default Navbar;

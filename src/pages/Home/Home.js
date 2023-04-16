import React , {useEffect} from 'react';
import './Home.scss';
import HomeSlider from '../../compnents/Slider/HomeSlider'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from '../../compnents/ProductList/ProductList'
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import Loader from '../../compnents/Loader/Loader'
import { STATUS } from '../../utils/status';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);


  useEffect(()=>{
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  console.log(products);
  const productStatus = useSelector(getAllProductsStatus);

  return (
    <main>
        <div className="slider-wrapper">
            <HomeSlider />
        </div>
        <div className="main-content bg-whitesmoke">
          <div className="container">
            <div className="categories py-5">
              <div className="categories-item">
                <div className="title-md">
                  <h3>Product Collection</h3>
                </div>
                {productStatus=== STATUS.LOADING ? <Loader /> : <ProductList />}
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home
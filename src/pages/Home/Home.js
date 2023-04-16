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
  
  const productStatus = useSelector(getAllProductsStatus);

  let categoryOne = products.filter(product => product.category === categories[0])
  let categoryTwo = products.filter(product => product.category === categories[1])

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
                {productStatus=== STATUS.LOADING ? <Loader /> : <ProductList products = {products} />}
              </div>
{/* classsifying using categories */}
              <div className="categories-item">
                <div className="title-md">
                  <h3>
                    {categories[1]}
                  </h3>
                </div>
                {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={categoryTwo}/>}
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home
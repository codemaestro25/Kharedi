import React, { useEffect } from 'react'
import './Category.scss';
import ProductList from '../../compnents/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory, getCategoryProductStatus, fetchAsyncCategoryProducts } from '../../store/categorySlice';
import Loader from '../../compnents/Loader/Loader'
import { STATUS } from '../../utils/status';


function Category() {
  const  dispatch = useDispatch();
  const {category} = useParams();
  const  categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductStatus = useSelector(getCategoryProductStatus);

  useEffect(()=>{
    dispatch(fetchAsyncCategoryProducts(category));
  }, [dispatch, category]);

  return (
    <div className="cat-products py-5 bg-whitesmoke">
      <div className="container">
        <div className="cat-products-content">
          <div className="title-md">
            <h3><span className='text-capitalize'>{category}</span> collection</h3>
          </div>
          {
            categoryProductStatus === STATUS.LOADING ? <Loader /> : <ProductList products={categoryProducts} />
          }
        </div>
      </div>
    </div>
  )
}

export default Category
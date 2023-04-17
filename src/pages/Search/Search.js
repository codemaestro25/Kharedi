import React from 'react';
import './Search.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductList from '../../compnents/ProductList/ProductList';
import Loader from '../../compnents/Loader/Loader'
import { STATUS } from '../../utils/status';
import axios from 'axios';
import { useState ,useEffect } from "react";
import { BASIC_URL } from '../../utils/apiUrl';





function Search() {

    const {searchTerm} = useParams(); //extracting  the searchTerm from the url

    const [search, setSearch] = useState(searchTerm);
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(`${BASIC_URL}/products`).then((response)=>{
            setData(response.data)
        }).catch((error)=> {
            console.log(error);
        })
    })

  return (
   <main>
    <div className="search-content bg-whitesmoke">
        <div className="container">
            <div className="py-5">
                <div className="title-md">
                    <h3>Search Results</h3>
                </div>
                {
                    data.filter((row)=>{
                        if(search === ""){
                            return row;
                        }
                        else if (row.title.toLowerCase().includes(search.toLowerCase())){
                            return row;
                        }

                    }).map((row, i )=> {
                        <ProductList products={row}/>
                    })
                }
            </div>
        </div>
    </div>
   </main>
  )
}

export default Search
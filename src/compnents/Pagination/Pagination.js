import React, {useState} from "react";
import { nextPage, previousPage } from "../../store/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getTotalPage } from "../../store/paginationSlice";


const Pagination = ({
    totalResults,
    pageSize, 
    currentPage,
    setCurrentPage
}) => {

    
  
    // const [currentPage, setCurrentPage] = useState(1)

    const totalPages = () =>{
        let count =  Math.ceil(totalResults/pageSize);
        return count;
    }

    const handleNext  = ()=>{
        if(currentPage===totalPages()){
            return
        }
        setCurrentPage(currentPage=>currentPage+1)
    }
    const handlePrevious  = ()=>{
        if(currentPage===1){
         return  
        }
        return setCurrentPage(currentPage=>currentPage-1)
    }
  return (
    <>
      <div className="page-bar my-4 flex align-center justify-center">
        <button><i className="fas fa-arrow-left px-4" onClick={()=> handlePrevious()}></i></button>
        {
            `${currentPage} of ${totalPages()}`
        }
        <button><i className="fas fa-arrow-right px-4" onClick={()=> handleNext()}></i></button>
      </div>
    </>
  );
};

export default Pagination;

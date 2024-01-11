import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";
import { useState } from "react";


const Products = ({productdata}) => {
  
  const [ pageNumber, setPageNumber] = useState(0);
 

    const shuffledData = [...productdata];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }


  const productPerPage = 12;
  const pageVisited = pageNumber * productPerPage;
  const displayProducts = shuffledData.slice(pageVisited, pageVisited + productPerPage)
  
  

 const pageCount = Math.ceil(productdata.length / productPerPage);

 const changePage = ({selected}) => {
  setPageNumber(selected)
 }


  return (
    
    <div className="w-full mt-8">
           <h1 className='mb-3 text-xl text-center font-poppins font-semibold text-red-500'> Products</h1>
         <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-4 md:w-11/12 mt-8 gap-4 mx-auto">
                 {
                    displayProducts.map((product) => {
                        return (
                           <div className="shadow border rounded-lg md:w-[230px] lg:w-[300px] mx-auto lg:h-[380px]" key={product.id}>
                                              <ProductCard product={product} /> 
                                       </div>
                         )
                       })
                 }
        </div> 
        <ReactPaginate 
                  previousLabel={"previous"}
                  nextLabel={'next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="flex justify-between item-center w-[400px] mx-auto mt-10"
                  previousLinkClassName="border-[2px]  border-red-500 rounded-lg py-2 px-5 hover:bg-red-500 hover:text-white"
                  nextLinkClassName="border-[2px]  border-red-500 rounded-lg py-2 px-5 hover:bg-red-500 hover:text-white"
                  activeClassName="fill bg-red-500 text-white py-1 px-3 rounded-md"
                />
    </div>
  )
}

export default Products
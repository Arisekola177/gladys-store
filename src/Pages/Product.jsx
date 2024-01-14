
import ProductCard from "../components/ProductCard"
import ReactPaginate from 'react-paginate'
import { useState } from "react"
import Category from "../components/Category"

const Product= ({data}) => {

  const [productdata, setProductData] = useState(data)

  const shuffledData = [...productdata];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  const menuItems = [...new Set(data.map((product) => product.category))]
   
  const filterResult = (catItems) => {
    const result = data.filter((curData) => curData.category === catItems)
    setProductData(result)
  }
  const [ pageNumber, setPageNumber] = useState(0);

  const productPerPage = 9;
  const pageVisited = pageNumber * productPerPage;
  const displayProducts = shuffledData.slice(pageVisited, pageVisited + productPerPage)
 const pageCount = Math.ceil(productdata.length / productPerPage);

 const changePage = ({selected}) => {
  setPageNumber(selected)
 }
  return (
    <div className="w-full mt-28 md:mt-40" >
   
         <div className="flex justify-between gap-5 mt-5">
              <Category menuItems={menuItems} filterResult={filterResult} setProductData={setProductData} />
            <div className="w-full lg:w-10/12">
                <h1 className="text-xl text-center font-montserrat text-red-500">All Products</h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  mt-8 gap-4 w-10/12 mx-auto">
                    {
                       displayProducts.map((product) => 
                         (
                          <div className="shadow border rounded-lg md:w-[250px]  lg:w-[300px] md:h-[420px] lg:h-[380px] mx-auto "  key={product.id}>
                          <ProductCard product={product} />
                         </div>
                        )
                      )
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
         </div>
    </div>
  )
}

export default Product
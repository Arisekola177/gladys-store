import Banner from "../components/Banner"
import Buttons from "../components/Buttons"
import Products from "../components/Products"
import { useState } from "react"


const Home = ({data}) => {
  const [productdata, setProductData] = useState(data)


  const menuItems = [...new Set(data.map((product) => product.category))]
   
  
  const filterResult = (catItems) => {
    const result = data.filter((curData) => curData.category === catItems)
    setProductData(result)
  }
 

  return (
    <div className="">
        <Banner />
        <Buttons menuItems={menuItems}  filterResult={filterResult}  setProductData={setProductData} /> 
        <Products productdata={productdata} />
    </div>
  )
}

export default Home
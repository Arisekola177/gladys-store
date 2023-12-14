import Banner from "../components/Banner"
import Buttons from "../components/Buttons"
import Products from "../components/Products"
import products from "../assets/data/products"
import { useState } from "react"


const Home = () => {
  const [data, setData] = useState(products)

  const menuItems = [...new Set(data.map((product) => product.category))]
   
  
  const filterResult = (catItems) => {
    const result = products.filter((curData) => curData.category === catItems)
    setData(result)
  }
 

  return (
    <div className="">
        <Banner />
        <Buttons menuItems={menuItems}  filterResult={filterResult} setData={setData} /> 
        <Products data={data} />
    </div>
  )
}

export default Home
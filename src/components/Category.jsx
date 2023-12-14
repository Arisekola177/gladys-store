import products from "../assets/data/products";

const Category = ({menuItems, filterResult, setData}) => {



  return (
    <div className="hidden md:flex flex-col gap-4 mt-20 mx-auto">
            <h1 className="text-xl font-montserrat uppercase">Categories</h1>
                <button className="text-start px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white" onClick={() => setData(products)} >
                    All
                </button>
        {
            menuItems.map((cat) =>(
                
                <button 
                className="text-start px-4 py-2 rounded-lg  hover:bg-red-500 hover:text-white"
                onClick={() => filterResult(cat)}>
               
                    {cat}
                </button>
               
            ))
        }
     
    </div>
  )
}

export default Category
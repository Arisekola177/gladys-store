import products from "../assets/data/products";

const Buttons = ({menuItems, filterResult, setData}) => {

const customColors = ["#dbd597", "#b5db97", "#65a89b", "#6584a8", "#8065a8", "#65a869", "#a865a5"];


  return (
    <div className="hidden w-11/12 xl:w-8/12 mx-auto md:flex justify-between items-center mt-8">
                <button className="text-white px-8 py-2 rounded-md bg-slate-800" onClick={() => setData(products)} >
                    All
                </button>
        {
            menuItems.map((cat, index) =>(
                
                <button 
                 style={{ backgroundColor: customColors[index % customColors.length] }}
                 className="text-white px-4 py-2 rounded-md"
                onClick={() => filterResult(cat)}>
               
                    {cat}
                </button>
               
            ))
        }
     
    </div>
  )
}

export default Buttons
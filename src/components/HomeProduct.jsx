import products from "../assets/data/products"
import FormattedPrice from "./FormattedPrice";
import cart from '../assets/images/icon-cart.svg'
const Products = () => {
    const fractionToShow = 0.5;
    const shuffledData = [...products];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    const itemsToShow = Math.ceil(shuffledData.length * fractionToShow);
    const slicedData = shuffledData.slice(0, itemsToShow);
  return (
    

    <div className="w-full mt-4">
           <h1 className='mb-3 text-xl text-center font-poppins font-semibold text-red-500'>More Products</h1>
         <div className="grid grid-cols-4  mt-8 gap-4 w-10/12 mx-auto">
            
            {
                slicedData.map((product) =>(
                    <div className="shadow border rounded-lg w-[300px] h-[350px] hover:shadow-2xl"  key={product.id}>
                      <div className="flex justify-center items-center w-full h-auto">
                         <img className="w-[200px] h-auto object-cover hover:translate-x-2 duration-300" src={product.imgUrl} alt="product" />
                      </div>
                      <div>
                         <div className="font-montserrat font-semibold text-start px-4">
                            <h2 className="uppercase">{product.productName}</h2>
                         </div>
                        
                            <h2 className="font-bold text-gray-700 mt-4 px-4"><FormattedPrice amount={product.price} /></h2>
                            
                        
                      </div>
                       <div className="flex justify-between items-center mt-4">
                      <p className="py-4 px-4 font-mono">Category: {product.category}</p>
                      <div className="bg-primary cursor-pointer rounded-full hover:bg-red-500">
                            <img className="py-4 px-5 mr-1" src={cart} alt="cart" />
                            </div>
                            </div>
                    </div>
                ))
            }
        </div> 
    </div>
  )
}

export default Products
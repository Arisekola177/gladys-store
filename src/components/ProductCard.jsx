import { useNavigate } from "react-router-dom";
import FormattedPrice from "./FormattedPrice";
import { ToastContainer, toast } from 'react-toastify';
import {FaCartPlus} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/gladysSlice";
import { calculatePercentage } from "./Percentage";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = product.productName;

    const handleDetails = () => {
       navigate(`/product/${id}`, {
           state:{
               product: product
           }
       })
      
   }
    
  return (
<div className="cursor-pointer ">
            <div onClick={handleDetails} className="flex justify-center items-center w-full h-auto">
                <img className="w-[200px] h-auto object-cover scale-90 hover:scale-100 transition-transform duration-300" src={product.imgUrl} alt="product" />
            </div>
            <div>
             <div className="font-montserrat font-semibold text-start px-4">
                 <h2 className="uppercase">{product.productName}</h2>
                </div>
                  <div  className="flex md:flex-col lg:flex-row">  
                  <h2 className="font-bold text-gray-900 line-through mt-4 px-4"><FormattedPrice amount={product.old} /></h2> 
                  <h2 className="font-bold text-gray-700 mt-4 px-4"><FormattedPrice amount={product.price} /></h2>
                </div>
                   <div className='border-[1px] w-[150px] mt-2 ml-2 rounded-full border-red-500 text-xs hover:bg-red-500'>
                        <p className="py-2 px-4 font-semibold hover:text-white">{calculatePercentage(product.price, product.old)}% off</p>
                    </div>
                      </div>
                       <div className="flex justify-between items-center mt-4">
                      <p className="py-4 px-4 font-mono">Category: {product.category}</p>
                      <div className="cursor-pointer px-4 ">
                        <button onClick={() => dispatch(addToCart({
                                      id: product.id,
                                      title: product.productName,
                                      image: product.imgUrl,
                                      price: product.price,
                                      quantity: 1,
                                      description: product.description
                    })) & toast.success(`${product.productName} is added`)}>
                           <FaCartPlus className="text-2xl hover:text-red-500" />
                        </button>
                              
                            </div>
                            </div>
                            <ToastContainer
                            position='top-left'
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick rtl={false}
                             pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme='dark'
                          />
</div>
  )
}

export default ProductCard
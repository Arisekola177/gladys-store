import { ToastContainer, toast } from 'react-toastify';
import { FaTrash } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteItem, increaseQty } from '../../redux/gladysSlice';
import FormattedPrice from './FormattedPrice';


const CartItems = ({productData}) => {
   const dispatch = useDispatch()
  
  return ( 
    <div>
        <div className=''>
             {
                productData.map((item => (
                  
                     <div key={item.id} className="flex flex-col items-center md:flex-row justify-between md:gap-0 gap-4 mb-8 md:mb-0 "> 
                       
                       <FaTrash className='cursor-pointer text-xl lg:text-3xl text-red-500' onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.title} is removed`)}  />
                           <img className='w-28 md:w-36 md:px-2' src={item.image} alt='cart' />
                            <h1 className='w-full text-center md:w-52 md:px-2  '>{item.title}</h1>
                               <h1 className='px-2 font-medium'><FormattedPrice amount={item.price} /></h1>
                              <div className=' border-[1px] border-black p-1 px-2 gap-5  bg-white flex justify-between items-center  rounded-md'>
                               <div className="">
                                <h2 className="">Quantity</h2>
                               </div>
                                  <div className="flex justify-between items-center gap-2">
                                 <button onClick={() => dispatch(decreaseQty({
                                       id: item.id,
                                       title: item.productName,
                                       image: item.imgUrl,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description
                                 }))}  className='hover:bg-red-400 hover:text-yellow-800 w-8 rounded-md '>-</button>

                                  <span className=''>
                                    {item.quantity} 
                                    </span>

                                 <button onClick={() => dispatch(increaseQty({
                                       id: item.id,
                                       title: item.productName,
                                       image: item.imgUrl,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description
                                     }))} className='hover:bg-red-400 hover:text-yellow-800 w-8 rounded-md '>+</button>
                                 </div>
                          </div>
                                  <h2 className=' px-2 font-medium '><FormattedPrice amount={item.price * item.quantity} /></h2>
                           
                           
                    
                      </div>
                  
                )))
             }  
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

export default CartItems
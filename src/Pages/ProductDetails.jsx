
import products from "../assets/data/products";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import FormattedPrice from "../components/FormattedPrice";
import { addToCart, decreaseQty, increaseQty } from "../../redux/gladysSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {

  const baseQty = 1;
  const location = useLocation();
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(baseQty);
  const [similarProducts, setSimilarProducts] = useState([]);
  
 const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
  };

  
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  
  useEffect(() => {
    setDetails(location.state.product);
    const currentCategory = location.state.product.category;
    const filteredProducts = products.filter(
      (product) => product.category === currentCategory && product.id !== details.id
    );
    const limitedSimilarProducts = filteredProducts.slice(0, 4);
    setSimilarProducts(limitedSimilarProducts);
  }, [location.state.product, details.id]);

  return (
    <div className="w-full">
      <div>
        {details && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <img className="w-[400px]" src={details.imgUrl} alt="productImg" />
            </div>
            <div className="mt-10 px-4 md:px-0 ">
               <h1 className="text-3xl font-montserrat font-semibold text-red-500 mb-5">{details.productName}</h1>
               <p className="text-sm leading-7 w-full xl:w-[600px] mb-5">{details.description}</p>
               <h1 className="text-3xl font-montserrat font-semibold text-gray-500 mb-5"><FormattedPrice amount={details.price} /></h1>
           <div className="flex gap-5 items-center mb-5">   
             <div className="border border-b-[2px] w-[130px] h-auto bg-primary rounded-lg  ">
              <div className="text-center flex gap-5 items-center justify-center">
              <div className=" cursor-pointer hover:bg-red-500 hover:rounded-lg">
                 <button onClick={handleDecrease} className="px-3 py-2">-</button>
              </div>
              <div>
                 <span>{quantity}</span>
              </div>
              <div className="cursor-pointer hover:bg-red-500 hover:rounded-lg" >
                 <button onClick={handleIncrease} className="px-3 py-2">+</button>
              </div>
              </div>
             
            </div>
            <div className="bg-blue-700 rounded-lg hover:bg-blue-400">
              <button onClick={() => dispatch(addToCart({
                                      id: details.id,
                                      title: details.productName,
                                      image: details.imgUrl,
                                      price: details.price,
                                      quantity: 1,
                                      description: details.description
                    })) & toast.success(`${details.productName} is added`)} className="py-2 px-4 text-white">Add to cart</button>
            </div>
          </div>
         
          <div>
            <p className="mb-5">Reviews:</p>
            <div className="flex gap-2 items-center mb-5">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar />
              </div>
              {/* <p>Rating: {details.reviews.rating}</p> */}
           </div>
            </div>
            
          </div>
        )}
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl font-montserrat font-semibold">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 ">
          {similarProducts.map((product) => (
            <div className="shadow border rounded-lg w-[300px] h-[400px] xl:h-[360px] mx-auto flex flex-col gap-5 justify-center items-center hover:shadow-2xl" key={product.id}>
              <ProductCard product={product}/>
            </div>
            
          ))}
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
  );
};

export default ProductDetails;


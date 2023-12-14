
import { Link } from 'react-router-dom'
import {  bannertwo, bannerone, bannerthree} from '../assets/images/index'
import Slider from 'react-slick'


function Banner() {

    const Next = (props) => {
        const {onClick} = props
        return(
            <div className='py-1 px-6 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer duration-200 rounded 
            text-xs flex items-center justify-center ml-4  absolute top-[50%] left-0' onClick={onClick}>
            <p>Next</p>
        </div>
        )
        
     }

     const Prev = (props) => {
        const {onClick} = props
        return(
            <div className='py-1 px-6 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer 
            duration-200 rounded text-xs mr-4 flex items-center justify-center absolute z-20 right-0 top-[50%]' onClick={onClick}>
           <p>Prev</p>
          </div>
        )
    
     } 

    var settings = { 
        dots: false,
        Infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    }

  return (
    <div className='relative'>
         
      
         <Slider {...settings}>
               <div className='w-full md:h[600px] relative object-cover'>
                <img 
                 src={bannerone}
                 alt='banner1'
                />
            </div>
            
            <div className='w-full  md:h[600px]  relative object-cover'>
                <img
                 src={bannertwo}
                 alt='banner1'
                />
            </div>
            
            <div className='w-full  md:h[600px]   relative object-cover'>
                <img
                 src={bannerthree}
                 alt='banner1'
                />
            </div>

         </Slider>
         <div className='hidden md:block absolute top-[40%] left-32'>
            <h1 className='text-4xl font-bold text-gray-800 mb-6'>30% off on all Product</h1>
            <p>Offer valid while stock last</p>
            <div className='bg-red-500 rounded-lg text-center mt-5 w-[150px]'>
                <Link to='/products'>
            <button className='text-white py-2 px-6'>Shop Now</button>
            </Link>
            </div>
            
         </div>
         
    </div>
  )
}

export default Banner
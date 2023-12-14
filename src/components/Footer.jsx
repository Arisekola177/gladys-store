import {Link} from 'react-router-dom'
import logo from '../assets/images/eco-logo.png'
import payment from '../assets/images/payment.png'
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="font-montserrat w-full bg-primary border-b-[2px] mt-6">
        <div className="w-10/12 mx-auto flex flex-col md:w-11/12 md:flex-row md:justify-between py-4">
           <div>
             <Link  className="flex gap-2 items-center" to='/'>
              <img className="w-[25px] md:w-[40px]" src={logo} alt="logo" />
              <h2 className="text-md md:text-2xl font-bold mt-2 text-red-600">Gladys</h2>
             </Link>
             <div className='flex gap-3 mt-5'>
                <FaInstagram className='text-2xl cursor-pointer hover:text-red-500' />
                <FaFacebook className='text-2xl cursor-pointer hover:text-red-500' />
                <FaLinkedin className='text-2xl cursor-pointer hover:text-red-500' />
                <FaTwitter className='text-2xl cursor-pointer hover:text-red-500' />
             </div>
             </div>
            
             <div className='flex flex-col justify-center mt-8 md:mt-0'>
                <h2 className='font-bold font-montserrat mb-5'>Subscribe to our Newsletter</h2>
                <div className='flex gap-4'>
                <input className='w-full py-2 px-4 rounded-lg' type='email' placeholder='Enter your email' />
                <div className="bg-red-500 text-center text-white rounded-lg hover:bg-transparent hover:text-black duration-500 hover:border hover:rounded-lg hover:border-red-500">
                 <button className="py-2 px-5">Submit</button>
                 </div>
                 </div>
             </div>
             
             <div className='hidden lg:block mt-8'>
                <img className='w-[300px]' src={payment} alt='payment' />
             </div>
        </div> 
    </div>
  )
}

export default Footer
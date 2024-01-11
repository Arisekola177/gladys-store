import { Link } from "react-router-dom"
import user from '../assets/images/user-icon.png'
import cart from '../assets/images/icon-cart.svg'
import logo from '../assets/images/eco-logo.png'
import {FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { useState } from "react"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase.config"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { removeUser } from "../../redux/gladysSlice"

const Navbar = () => {
  const productData = useSelector((state) => state.gladys.productData);
  const userInfo = useSelector((state) => state.gladys.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Links = [
    {name: "Home", path: '/'},
    {name: "Shop", path: '/products'},
    {name: "Contact", path: '#'},
    {name: "About", path: '#'},
  ]

  const [open, isOpen] = useState('')
  

  const handleNavbar = () => {
    isOpen(!open)
  }

  const handleSignOut = () => {
        signOut(auth).then(() => {
          dispatch(removeUser())
          navigate('/')
        }).catch((error) => {
          console.log(error)
        })
  }
  
  return (
    <div className="font-montserrat w-full bg-primary border-b-[2px] border-gray-400 fixed top-0 z-50 backdrop-blur-2xl transition-colors">
             
        <div className="w-11/12 mx-auto flex justify-between gap-4 items-center py-4 ">
              
             <Link  className="flex justify-between gap-2  items-center" to='/'>
              <img className="w-[25px] md:w-[40px]" src={logo} alt="logo" />
              <h2 className="text-md lg:text-2xl font-bold mt-2 text-red-600">Gladys</h2>
             </Link>
           
             
             <div className="hidden md:flex items-center md:gap-2 lg:gap-6">
                {
                  Links.map((link) => (
                    <div className="hover:underline hover:underline-offset-8 duration-500" key={link.name}>
                      <Link className="font-bold text-sm text-slate-800 hover:text-red-500 " to={link.path}>
                        {link.name}
                      </Link>
                   </div>
                  ))
                }
             </div>

             <div className="hidden md:flex gap-4  items-center">
               
                {
                  userInfo ? (
                    <div className="flex md:gap-2 lg:gap-5 items-center">
                      <img className="w-[40px] rounded-full" src={userInfo.image} alt="user" />
                      <div>
                        <p className="font-mono underline">{userInfo.name}</p>
                        <p className="hidden lg:block font-mono">{userInfo.email}</p>
                      </div>
                    </div>
                  ) : (
                  <div>
                      <img className="w-[40px] rounded-full" src={user} alt="user" />
                  </div>)
                }
                <div className="relative ">
                  <Link to='/cart'>
                <img className="w-[35px]" src={cart} alt="cart" />
                </Link>
                <div className="absolute top-0 right-0 bg-red-500 rounded-lg text-white">
                <span className="p-1 text-sm">{productData.length}</span>
                </div>
                </div>
                <div className="bg-red-500 text-white rounded-lg hover:bg-transparent hover:text-black duration-500 hover:border hover:rounded-lg hover:border-red-500">
                  {userInfo ? (
                  <button onClick={handleSignOut} className="py-2 px-5">Logout</button>
                  ) : (<Link to='/login'>
                  <button className="py-2 px-5">Register/Login</button>
                  </Link>)}
                </div>
             </div>
                <div className="flex justify-between gap-10 items-center md:hidden cursor-pointer ">
               
               <div className="">
                 <Link to='/cart'>
                <img className="w-[25px]" src={cart} alt="cart" />
                </Link>
                <div className="absolute top-3 right-18 bg-red-500 rounded-lg text-white">
                <span className="p-1 text-sm">{productData.length}</span>
                </div>
                </div>
                 <div onClick={handleNavbar} >
                  {open? ( <FaTimes />) : ( <FaBars />)}
                  </div>
             </div>
             
             <div className={`absolute bg-white z-[1] left-0 w-[100%]  transition-all duration-500  ${open ? 'top-16 ':'top-[-490px]'}`}>
                  
             <div className="flex flex-col gap-8 mt-5 px-8" > 
              {
                Links.map((link) => (
                 
                     <Link className="text-sm text-gray-800"  key={link.name} to={link.path}>
                      {link.name}
                     </Link>
                 
                ))
               }
                <div className="flex flex-col gap-4 relative ">
               
                {
                  userInfo ? (
                    <div className="flex flex-col gap-5 items-start">
                      <img className="w-[40px] rounded-full" src={userInfo.image} alt="user" />
                      <div>
                        <p className="font-mono underline">{userInfo.name}</p>
                        <p className="font-mono">{userInfo.email}</p>
                      </div>
                    </div>
                  ) : (
                  <div>
                      <img className="w-[40px] rounded-full" src={user} alt="user" />
                  </div>)
                }
                <div className="bg-red-500 mx-auto text-white rounded-lg hover:bg-transparent hover:text-black duration-500 hover:border hover:rounded-lg hover:border-red-500">
                  {userInfo ? (
                  <button onClick={handleSignOut} className="py-2 px-5">Logout</button>
                  ) : (<Link to='/login'>
                  <button className="py-2 px-5">Register/Login</button>
                  </Link>)}
                </div>
             </div>
            
                </div>
          
          </div>
       
          </div>
          
    </div>
  )
}

export default Navbar





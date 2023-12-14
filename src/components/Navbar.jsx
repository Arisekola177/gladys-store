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
    {name: "Products", path: '/products'},
    
  ]

  const [open, isOpen] = useState('')
  const [ query, setQuery] = useState("")

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
    <div className="font-montserrat w-full bg-primary border-b-[2px] border-gray-400 sticky top-0 z-50 backdrop-blur-2xl transition-colors">
             
        <div className="w-11/12 mx-auto flex justify-between gap-4 items-center py-4 ">
              
             <Link  className="flex justify-between gap-2  items-center" to='/'>
              <img className="w-[25px] md:w-[40px]" src={logo} alt="logo" />
              <h2 className="text-md lg:text-2xl font-bold mt-2 text-red-600">Gladys</h2>
             </Link>
           
             



             <div className="hidden md:flex flex-1 relative  gap-2 justify-between  items-center ">
              <input 
              className="w-[100%] py-2 px-5 rounded-lg text-sm outline-none" type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
              />
               <div className="absolute top-3 left-2"><FaSearch /></div>
              <div className="bg-red-500 text-white rounded-lg hover:bg-transparent hover:text-black duration-500 hover:border hover:rounded-lg hover:border-red-500">
              <button className="py-2 px-5 ">Search</button>
              </div>
             </div>
            
             <div className="hidden md:flex gap-4  items-center">
                <img className="w-[30px] rounded-full" src={userInfo? (userInfo.image) : (user)} alt="user" />
                <div className="relative">
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
                <img className="w-[35px]" src={cart} alt="cart" />
                </Link>
                <div className="absolute top-3 right-18 bg-red-500 rounded-lg text-white">
                <span className="p-1 text-sm">{productData.length}</span>
                </div>
                </div>
                 <div onClick={handleNavbar} >
                  {open? ( <FaTimes />) : ( <FaBars />)}
                  </div>
             </div>
             
             <div className={`absolute bg-white z-[1] left-0 w-[100%] h-96  transition-all duration-500  ${open ? 'top-16 ':'top-[-490px]'}`}>
                  
             <div className="flex flex-col gap-8 mt-5 px-8" > 
              {
                Links.map((link) => (
                 
                     <Link className="text-sm text-gray-800"  key={link.name} to={link.path}>
                      {link.name}
                     </Link>
                 
                ))
               }
                <div className="flex flex-col gap-4 relative ">
               
                <img className="w-[30px] rounded-full" src={userInfo? (userInfo.image) : (user)} alt="user" />
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





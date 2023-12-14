import google from '../assets/images/SigninGoogle.png'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {addUser} from '../../redux/gladysSlice'
import { auth } from '../../firebase.config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      dispatch(addUser({
        id: user.id,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }));
  
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      // Display a user-friendly error message
    }
  };
 
  return (
    <div className="flex justify-center items-center mt-10">
       <div className="flex flex-col gap-3">
         <div onClick={handleGoogleLogin} className="w-[250px] border rounded-lg flex gap-4 items-center py-2 px-6 cursor-pointer ">
            <img className='w-[40px]' src={google} alt='google' />
            <h3>Sign in with Google</h3>
        </div> 
       </div> 
    </div>
  )
}

export default Login
import {google} from '../assets/images/index'
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import {addUser} from '../../redux/gladysSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider()

  const handleGoogleLogin = async () => {
 
    signInWithPopup(auth, provider).then((result) => {
     
      const user = result.user;
      dispatch(addUser({
      id: user.id,
      name: user.displayName,
      email:user.email,
      image: user.photoURL
    })
    )
    setTimeout(() => {
     navigate('/')
    }, 1500)
    }).catch((error) => {
     console.log(error)
    });
  };
 
  return (
    <div className="flex justify-center items-center mt-32">
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
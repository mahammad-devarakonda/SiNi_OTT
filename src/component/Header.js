import React from 'react'
import { auth } from './Firebase';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utills/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utills/constant';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { toggleGptSearchView } from '../utills/gptSlice';
import { SUPPORTED_LANG } from "../utills/constant"
import { changeLanguage } from '../utills/configSlice';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user.userInfo)
  const Show_Language_Bar = useSelector((store) => store.gpt.showGptSearch)
  const handleSignout = () => {

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGPTSearh = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLANGchange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const handleSearchMovie=()=>{
    navigate('/search')
  }


  return (
    <div className='absolute inset-x-0 top-0 bg-gradient-to-b from-black via-black/70 to-transparent h-12 flex justify-between items-center px-4 z-10 md:px-6 lg:px-8'>
      <img className='w-20 h-[40px] mt-2' src={LOGO} alt='log_img' />

      {user && (
        <div className='flex items-center gap-2'>
          {Show_Language_Bar && (
            <select
              onChange={handleLANGchange}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full sm:w-auto"
            >
              {SUPPORTED_LANG.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleSearchMovie} className="p-2 rounded-r text-white" title="Search">
              <FaSearch  size={20}/>
          </button>
          <div className='flex items-center gap-2 sm:gap-4'>
            <button
              className="bg-red-600 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border-none cursor-pointer text-sm"
              onClick={handleGPTSearh}
            >
              {Show_Language_Bar ? "Home Page" : <><span className="text-white font-medium">Ask</span> <span className="font-bold italic text-white">SiNi</span></>}
            </button>
            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt='profile' />
              <h4 className='hidden sm:block text-white text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>{user?.displayName}</span>
              </h4>
            </div>
            <button
              onClick={handleSignout}
              className='font-bold text-white text-xl sm:text-2xl'
            >
              <RiLogoutBoxRLine />
            </button>
          </div>
        </div>
      )}
    </div>


  )
}

export default Header

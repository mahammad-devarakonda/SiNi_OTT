import React from 'react'
import GptSearchPage from './GptSearchPage'
import { BG_IMG } from '../utills/constant'


const GptSearch = () => {
  return (
    <div className='bg-black bg-transparent flex justify-centers h-screen'>
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-20">
        <img className="h-full w-full object-cover z-0" src={BG_IMG} alt="BG-IMG" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <GptSearchPage />

    </div>
  )
}

export default GptSearch

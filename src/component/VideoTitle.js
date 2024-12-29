import React from 'react'
import { useNavigate } from 'react-router-dom';
const VideoTitle = ({ title, overview, id }) => {

  const navigate = useNavigate();

  const truncateOverview = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return words.slice(0, numWords).join(' ') + '...';
  };
  return (
    <>
      {title && overview ? (
        <div className=" py-72 px-10 max-w-lg mx-auto mt-1 absolute h-[400px] z-10">
          <div className=''>
            <h1 className="font-bold mb-4 text-xl md:text-xl sm:text-base lg:text-2xl text-white text-gradient">{title}</h1>
            <p className="text-white text-sm mb-4 hover:whitespace-normal sm:text-xs md:text-base lg:text-sm sm:mb-7">
              {truncateOverview(overview, 30)}
            </p>
          </div>
        </div>
      ) : (
        // Shimmer UI when title or overview is not available
        <div className="bg-gradient-to-r from-black via-black/50 to-transparent py-72 px-6 max-w-lg mx-auto mt-1 absolute h-[0]">
          <div className="w-full h-8 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-6 bg-gray-300 animate-pulse"></div>
        </div>
      )}
    </>

  )
}

export default VideoTitle

import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.NowPlayingMovies);

  if (!movies || movies.length === 0) {
    return (
      <div className='mt-14 relative overflow-x-hidden'>
        <h1 className="bg-gradient-to-r from-black animate-pulse w-1/4 absolute mt-64 ml-6 p-5 rounded-md"></h1>
        <div className="bg-gradient-to-r from-black via-black/50 to-transparent py-7 mt-80 ml-6 rounded-md px-28 max-w-lg mx-auto absolute gap-3 h-[100px]">
            <p className="h-4 bg-gray-600 animate-pulse mb-2 w-full"></p>
        </div>
        <div className="md:h-[45vw] w-full bg-gray-300 animate-pulse mb-[240px] "></div>
      </div>
    );
  }

  const mainMovie = movies[6];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} id={id} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;

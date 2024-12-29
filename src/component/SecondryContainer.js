import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'


const SecondryContainer = () => {
  const { NowPlayingMovies, PopularMovie, DiscoverMovies, UpComingMovies,AiringMovies } = useSelector((store) => store.movies)
  console.log(AiringMovies);
  
  const MovieList = lazy(() => import('./MovieList'))


  return (
    <div className='bg-black'>
      <div className=" mt-0 md:-mt-60 md:pl-2 relative z-20">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList title={"Now Playing"} movies={NowPlayingMovies} />
          <MovieList title={"Popular"} movies={PopularMovie} />
          <MovieList title={"Discover"} movies={DiscoverMovies} />
          <MovieList title={"UpComing"} movies={UpComingMovies} />
          <MovieList title={"Airing Today"} movies={AiringMovies} />
        </Suspense>
      </div>
    </div>
  )
}

export default SecondryContainer

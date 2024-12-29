  import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import useDiscoverMovies from '../hooks/useDiscoverMovies';
import useUpcoming from '../hooks/useUpcoming';
import useAiringToday from '../hooks/useAiringToday';

const Browse = () => {
  const showGPTSearch = useSelector((state) => state.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useDiscoverMovies();
  useUpcoming();
  useAiringToday();
  
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  )
}

export default Browse

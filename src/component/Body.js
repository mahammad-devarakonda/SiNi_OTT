import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PlayMovie from './PlayMovie';
import Search from './Search';
import NetworkMonitor from '../utills/NetworkMoniter';


const Body = () => {

  const routing = createBrowserRouter([
        {
          path: "/", 
          element: <Login />
        },
        {
          path: "browse", 
          element: <Browse />
        },
        {
          path: "movie/:movieID",
          element: <PlayMovie />
        },
        {
          path: "search", 
          element: <Search />
        }
  
    
  ]);

  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={routing} />
      <NetworkMonitor/>
    </div>
  )
}

export default Body

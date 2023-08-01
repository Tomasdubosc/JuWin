
import Root from './components/Root';
import Home from './components/Home';
import NewMatchPage,{NewMatchAction} from './pages/Matches/NewMatchPage';
import GamesPage from './pages/Games/GamesPage';
import MatchesPage from './pages/Matches/MatchesPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () =>{
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:
      [
        {
          path: "games",
          children:
          [
            {
              index:true,
              element: <GamesPage/>,
            },
            {
              path: 'new',
              element: <p>New GAME FORM!</p>,
            }

          ] 
        },
        {
          path: "matches",
          children:
          [
            {
              index:true,
              element: <MatchesPage/>,
            },
            {
              path: 'new',
              element: <NewMatchPage/>,
              action: NewMatchAction
            }

          ]  
        }
        
      ]
         
    }
   
  ]);
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;

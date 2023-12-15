import '../styles/App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Toppers from '../hooks/toppers';
import { CheckUserExist } from '../helper/helper';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>
  },
  {
    path:'/quiz',
    element:<CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path:'/result',
    element:<CheckUserExist><Result/></CheckUserExist>
  },
  {
    path:'/toppers',
    element:<Toppers/>
  }
])


function App() {
  return (
    <>

    <RouterProvider router={router} />
    </>
  );
}

export default App;

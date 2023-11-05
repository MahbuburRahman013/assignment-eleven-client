import {createBrowserRouter} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import MainLayout from '../Layout/MainLayout';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;
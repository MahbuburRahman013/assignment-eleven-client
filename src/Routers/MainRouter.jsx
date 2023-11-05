import {createBrowserRouter} from 'react-router-dom'
import CreateAssignment from '../components/CreateAssignment';
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
        },
        {
          path:'/create-assignment',
          element:<CreateAssignment></CreateAssignment>
        }
      ]
    },
  ]);

export default router;
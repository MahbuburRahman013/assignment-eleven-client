import {createBrowserRouter} from 'react-router-dom'
import AllAssignment from '../components/AllAssignment';
import CreateAssignment from '../components/CreateAssignment';
import DetailsAssignment from '../components/DetailsAssignment';
import Home from '../components/Home';
import Login from '../components/Login';
import MySubmitted from '../components/MySubmitted';
import Registration from '../components/Registration';
import SubmitModal from '../components/SubmitModal';
import SubmittedAssignment from '../components/SubmittedAssignment';
import UpdateAssignment from '../components/UpdateAssignment';
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
        },
        {
          path:'/all-assignment',
          element:<AllAssignment></AllAssignment>
        },
        {
          path:'/update-assignment',
          element:<UpdateAssignment></UpdateAssignment>
        },
        {
          path:'/assignment-details',
          element:<DetailsAssignment></DetailsAssignment>
        },
        {
          path:'/submitted-assignment',
          element: <SubmittedAssignment></SubmittedAssignment>
        },
        {
          path:'/givenMarks/:id',
          element:<SubmitModal></SubmitModal>,
          loader: ({params}) => fetch(`http://localhost:5000/modal-data/${params.id}`)
        },
        {
          path:'/my-assignment',
          element:<MySubmitted></MySubmitted>
        }
      ]
    },
  ]);

export default router;
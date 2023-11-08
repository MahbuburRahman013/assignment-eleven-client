import { createBrowserRouter } from 'react-router-dom'
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
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/create-assignment',
        element: <PrivateRoute>
                      <CreateAssignment></CreateAssignment>
                 </PrivateRoute>
      },
      {
        path: '/all-assignment',
        element: <AllAssignment></AllAssignment>
      },
      {
        path: '/update-assignment/:id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({params})=> fetch(`https://server-side-orcin.vercel.app/assignment/${params.id}`)
      },
      {
        path: '/assignment-details/:id',
        element: <PrivateRoute><DetailsAssignment></DetailsAssignment></PrivateRoute>,
        loader:({params})=> fetch(`https://server-side-orcin.vercel.app/assignment/${params.id}`)
      },
      {
        path: '/submitted-assignment',
        element: <PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>
      },
      {
        path: '/givenMarks/:id',
        element: <SubmitModal></SubmitModal>,
        loader: ({ params }) => fetch(`https://server-side-orcin.vercel.app/modal-data/${params.id}`)
      },
      {
        path: '/my-assignment',
        element: <PrivateRoute><MySubmitted></MySubmitted></PrivateRoute>
      }
    ]
  },
]);

export default router;
import { useContext } from "react";
import { ContextProvider } from "../authProvider/AuthProvider";
import {Navigate, useLocation} from 'react-router-dom';


const PrivateRoute = ({children}) => {
      const {user, isLoading} = useContext(ContextProvider);
      const location = useLocation();
      console.log(location)

      if(isLoading){
          return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
      }
      
      if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
      }


    return children;
};

export default PrivateRoute;
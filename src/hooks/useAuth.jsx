import { useContext } from "react";
import { ContextProvider } from "../authProvider/AuthProvider";


const useAuth = () => {
    const auth = useContext(ContextProvider);
    return auth;
};

export default useAuth;
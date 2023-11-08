import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { ContextProvider } from "../authProvider/AuthProvider";
import MySubCard from "./MySubCard";


const MySubmitted = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useContext(ContextProvider);

    useEffect(()=>{
        axios.get(`http://localhost:5000/my-assignment?email=${user.email}`,{withCredentials:true})
        .then(res=>{
            setLoadedData(res.data);
            setIsLoading(false);
        })
   
   },[user.email])

    return (
        <div className="container min-h-[50vh] mx-auto my-10">
            {
                isLoading? <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>:
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        loadedData.map(data=> <MySubCard data={data} key={data._id}></MySubCard>)
                    }
                </div>
            }
            
        </div>
    );
};

export default MySubmitted;
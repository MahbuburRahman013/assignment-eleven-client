import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ContextProvider } from "../authProvider/AuthProvider";
import SubmittedCard from "./SubmittedCard";


const SubmittedAssignment = () => {
const [loadedData, setLoadedData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const {user} = useContext(ContextProvider);

useEffect(()=>{
     axios.get(`http://localhost:5000/load-submitData?email=${user.email}`,{withCredentials:true}, )
     .then(res=>{
         setLoadedData(res.data);
         setIsLoading(false);
     })

},[user.email])
    
  
    return (
      <div className="min-h-[50vh]">
            {
                isLoading?<div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>:
                <div className="px-3">
                    {
                        loadedData.map(data=> <SubmittedCard data={data} key={data._id}></SubmittedCard>)
                    }
                </div>
            }
      </div>
    );
  };
  

export default SubmittedAssignment;
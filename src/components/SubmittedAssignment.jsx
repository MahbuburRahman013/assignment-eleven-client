import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SubmittedCard from "./SubmittedCard";


const SubmittedAssignment = () => {
const [loadedData, setLoadedData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
     axios.get('http://localhost:5000/load-submitData')
     .then(res=>{
         setLoadedData(res.data);
         setIsLoading(false);
     })

},[])
    
  
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
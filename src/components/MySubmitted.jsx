import axios from "axios";
import { useEffect, useState } from "react";
import MySubCard from "./MySubCard";


const MySubmitted = () => {
    const [loadedData, setLoadedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get('http://localhost:5000/my-assignment')
        .then(res=>{
            setLoadedData(res.data);
            setIsLoading(false);
        })
   
   },[])

    return (
        <div className="container mx-auto my-10">
            {
                isLoading? <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>:
                <div className="grid grid-cols-3">
                    {
                        loadedData.map(data=> <MySubCard data={data} key={data._id}></MySubCard>)
                    }
                </div>
            }
        </div>
    );
};

export default MySubmitted;
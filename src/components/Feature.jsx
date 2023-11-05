import { useState } from "react";
import { useEffect } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const [features,setFeatures] = useState([])

 useEffect(()=>{
       fetch('/feature.json')
       .then(res=> res.json())
       .then(data=> setFeatures(data))
 },[])

    return (
        <div className="my-16 container mx-auto">
            <h1 className="text-center text-4xl my-5 font-semibold">Our Features</h1>
            <div className="flex justify-center flex-wrap items-center gap-10">
            
            {
                features.map((feature, index)=> <FeatureCard feature={feature} key={index}></FeatureCard>)
            }
        </div>
        </div>
    );
};

export default Feature;
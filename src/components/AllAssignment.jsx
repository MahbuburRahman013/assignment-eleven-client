import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {
    const [allAssignment, setAllAssignment] = useState([]);
    const [isTrue, setIsTrue] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:5000/allAssignment')
            .then(res => {
                setAllAssignment(res.data)
                setIsTrue(false)
            })

    }, [])


    return (
        <div className="bg-gray-100">
            <div className="flex justify-center pt-7">
                <select className="select select-error w-full max-w-xs">
                    <option disabled selected>What is the best headless CMS</option>
                    <option>Strapi</option>
                    <option>Ghost</option>
                    <option>Netlify CMS</option>
                    <option>Sanity</option>
                </select>
            </div>

            {isTrue ? <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div> :
                <div className="grid grid-cols-3 gap-10 container mx-auto py-8">
                    {
                        allAssignment.map(assignment => <AssignmentCard assignment={assignment} key={assignment._id}></AssignmentCard>)
                    }
                </div>
            }
        </div>

    );
};

export default AllAssignment;
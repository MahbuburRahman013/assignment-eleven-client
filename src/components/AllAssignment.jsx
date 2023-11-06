import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import AssignmentCard from "./AssignmentCard";


const AllAssignment = () => {
    const [allAssignment, setAllAssignment] = useState([]);
    const [isTrue, setIsTrue] = useState(true)
    const [difficulty, setDifficulty] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:5000/allAssignment`,{params: { query: difficulty }})
            .then(res => {
                setAllAssignment(res.data)
                setIsTrue(false)
            })

    }, [difficulty])

    const handleDeleteAssignment = id =>{
        axios.delete(`http://localhost:5000/delete-assignment/${id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                const remaining = allAssignment.filter(assignment => assignment._id !== id);
                alert('delete assignment')
                setAllAssignment(remaining)
                setIsTrue(false)
            }
        })
    }

    
    return (
        <div className="bg-gray-100">
            <div className="flex justify-center pt-7">
                <select 
                className="select select-error w-full max-w-xs"
                id="difficulty"
                onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="">All Types</option>
                    <option value='easy'>Easy</option>
                    <option value='hard'>Hard</option>
                    <option value='medium'>Medium</option>
            
                </select>
            </div>

            {isTrue ? <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div> :
                <div className="grid grid-cols-3 gap-10 container mx-auto py-8">
                    {
                        allAssignment.map(assignment => <AssignmentCard handleDeleteAssignment={handleDeleteAssignment}    assignment={assignment} key={assignment._id}></AssignmentCard>)
                    }
                </div>
            }
        </div>

    );
};

export default AllAssignment;
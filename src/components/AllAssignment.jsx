import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import AssignmentCard from "./AssignmentCard";
import useAuth from "../hooks/useAuth";
import '../index.css';
import toast, { Toaster } from 'react-hot-toast';


const AllAssignment = () => {
    const [allAssignment, setAllAssignment] = useState([]);
    const [isTrue, setIsTrue] = useState(true)
    const [difficulty, setDifficulty] = useState({});
    const { user } = useAuth();
    const [currentPage, setCurrentPage] = useState(0)
    const [result,setResult] = useState(76);
    const [perPage, setParPage] = useState(5);
    const numberOfPages = Math.ceil(result / perPage);
    
    const arrOFPages = [...Array(numberOfPages).keys()]


    useEffect(() => {
        axios.get(`http://localhost:5000/allAssignment?page=${currentPage}&size=${perPage}`, { params: { query: difficulty } })
            .then(res => {
                setAllAssignment(res.data)
                setIsTrue(false)
            })

    }, [difficulty,currentPage,perPage])

    const handleDeleteAssignment = id => {

        axios.delete(`http://localhost:5000/delete-assignment/${id}`, { params: { query: user?.email } })
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const remaining = allAssignment.filter(assignment => assignment._id !== id);
                    toast.success('deleted assignment')
                    setAllAssignment(remaining)
                    setIsTrue(false)
                }
                else {
                    toast.error('You are not able to delete')
                }
            })
    }


    useEffect(()=>{
        fetch('http://localhost:5000/assignmentCount')
        .then(res=> res.json())
        .then(data=> setResult(data.result))
    },[])


    const handleSelectPage =(page)=>{
        setParPage(parseInt(page.target.value))
        setCurrentPage(0)
     } 


    const handlePrevPage =()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
     }
     const handleNextPage =()=>{
       
        
            if((numberOfPages - 1) > currentPage){
                setCurrentPage(currentPage + 1)
            }
        
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
                <div className="grid grid-cols-1 px-2  lg:grid-cols-3 gap-10 container mx-auto py-8">
                    {
                        allAssignment.map(assignment => <AssignmentCard handleDeleteAssignment={handleDeleteAssignment} assignment={assignment} key={assignment._id}></AssignmentCard>)
                    }
                </div>
            }


            <div className='flex justify-center items-center'>
                
                <button className="btn-sm btn-primary btn-outline" onClick={handlePrevPage}>Prve</button>
                {
                    arrOFPages.map(page => <button className={` btn ${page === currentPage ? 'selected' : ''}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <select className="border border-blue-500" value={perPage} onChange={handleSelectPage} id="">
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                
                </select>
                <button className="btn-sm  btn-outline btn-primary" onClick={handleNextPage}>Next</button>
            </div>

     <Toaster></Toaster>

        </div>

    );
};

export default AllAssignment;
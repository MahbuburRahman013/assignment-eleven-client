import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Modal from './Modal';


const DetailsAssignment = () => {
    const { state } = useLocation();
    const { id } = state;
    const [loadedData, setLoadedData] = useState({});
    const [isTrue, setIsTrue] = useState(true);
    const { thumbnailURL, title, difficulty, dueDate, description, marks, user } = loadedData;

    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:5000/assignment/${id}`)
            .then(res => {
                setLoadedData(res.data);
                setIsTrue(false)
            })
    }, [id])



    return (
        <div className="bg-gray-100 min-h-screen p-4 flex justify-center items-center">
            {
                isTrue ?
                    <span className="loading loading-spinner loading-lg"></span> :

                    <div className="bg-white rounded-lg p-6 shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                        <div className="mb-6">
                            <img src={thumbnailURL} alt="Assignment Thumbnail" className="w-full h-auto rounded-lg" />
                        </div>

                        <div className="text-center">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="text-gray-600">Difficulty: {difficulty}</p>
                            <p className="text-gray-600">Due Date: {dueDate}</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-lg font-semibold">Description</p>
                            <p className="mt-2">{description}</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-lg font-semibold">Marks</p>
                            <p className="mt-2">{marks}</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-lg font-semibold">User</p>
                            <p className="mt-2">{user}</p>
                        </div>
                        <div>
                        <div className="mt-6 text-center">
                            <button
                                className="btn " onClick={()=>document.getElementById('my_modal_4').showModal()}

                            >
                                Take
                                assignment
                            </button>
                            </div>
                            
                               <Modal></Modal>
                               
                            
                        </div>
                    </div>

            }
        </div>
    );
};

export default DetailsAssignment;
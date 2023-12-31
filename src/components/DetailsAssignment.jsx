import { useLoaderData } from 'react-router-dom'
import Modal from './Modal';


const DetailsAssignment = () => {
    const loadedData = useLoaderData();
    const { thumbnailURL, title, difficulty, dueDate, description, marks, user } = loadedData;

    const loadedData2 = {...loadedData};
    delete loadedData2._id;
    


    return (
        <div className="bg-gray-100 min-h-screen p-4 flex justify-center items-center">
            

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
                            
                               <Modal loadedData2={loadedData2}></Modal>
                               
                            
                        </div>
                    </div>

            
        </div>
    );
};

export default DetailsAssignment;
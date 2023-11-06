import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignment, handleDeleteAssignment }) => {

    const { thumbnailURL, title, marks, difficulty, _id } = assignment;
    const navigate = useNavigate();

    const handleNavigate = id => {
        navigate('/update-assignment', { state: { id: id } })

    }
    const handleNavigate2 = id => {
        navigate('/assignment-details', { state: { id: id } })

    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">

            <img
                src={thumbnailURL}
                alt={title}
                className="w-full h-48 object-cover rounded-lg"
            />


            <h3 className="text-xl font-semibold mt-4">{title}</h3>


            <p className="text-gray-600 font-bold">Marks: {marks}</p>


            <p className="text-gray-600 font-semibold">Difficulty Level: {difficulty}</p>



            <button onClick={() => handleNavigate2(_id)} className="bg-[#607d8b] text-white px-4 py-2 mt-4 rounded hover:bg-[#3b4d57]">
                View Assignment
            </button>


            <div className="flex mt-4 space-x-2">


                <button onClick={() => handleNavigate(_id)} className="bg-[#739072] text-white px-4 py-2 rounded hover:bg-[#3d593c]">
                    Update Assignment
                </button>



                <button onClick={() => handleDeleteAssignment(_id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AssignmentCard;
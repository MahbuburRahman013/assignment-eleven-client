import axios from 'axios';
import {useLoaderData , useNavigate} from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UpdateAssignment = () => {
     const assignment = useLoaderData()
    
    const { title: titleUp, description: descriptionUp, marks: marksUp, thumbnailURL: thumbnailURLUp, difficulty, user, _id } = assignment;
    
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date()); 

   

    const handleUpdateAssignment = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnailURL = form.thumbnailURL.value;
        const difficulty = form.difficulty.value;
        const dueDate = form.dueDate.value;
        const updateInfo = { title, description, marks, thumbnailURL, difficulty, dueDate, user, _id }
        // console.log(updateInfo)

        axios.put(`http://localhost:5000/update-assignment/${_id}`, { updateInfo })
            .then(res => {
                if(res.data.modifiedCount > 0){
                    toast.success('update successfully!');
                    navigate('/all-assignment')
                }
            })
    }


    return (
        <div className="bg-[url('https://i.ibb.co/MGWmD8c/images-1.jpg')] py-10 bg-cover bg-no-repeat">
            <div className="max-w-md  mx-auto backdrop-blur-sm bg-white/50 px-3 lg:px-10 py-5 rounded-md">
                <h2 className="text-3xl font-semibold mb-4">Update Assignment Form</h2>
                <form onSubmit={handleUpdateAssignment}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            id="title"
                            required
                            defaultValue={titleUp}
                            className="w-full px-3 backdrop-blur-sm bg-white/50 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name='description'
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                            rows="4"
                            defaultValue={descriptionUp}

                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                            Marks
                        </label>
                        <input
                            type="number"
                            id="marks"
                            name='marks'
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                            defaultValue={marksUp}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnailURL" className="block text-sm font-medium text-gray-700">
                            Thumbnail Image URL
                        </label>
                        <input
                            type="text"
                            id="thumbnailURL"
                            name='thumbnailURL'
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring backdrop-blur-sm bg-white/50 focus:border-blue-300"
                            defaultValue={thumbnailURLUp}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
                            Assignment Difficulty Level
                        </label>
                        <select
                            id="difficulty"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                            name='difficulty'
                            defaultValue={difficulty}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                            Due Date
                        </label>
                        <DatePicker
                            id="dueDate"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <Toaster></Toaster>
            </div>
        </div>
    );
};



export default UpdateAssignment;
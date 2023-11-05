import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [marks, setMarks] = useState(0);
    const [thumbnailURL, setThumbnailURL] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [dueDate, setDueDate] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        
    };

    return (
        <div className="bg-[url('https://i.ibb.co/MGWmD8c/images-1.jpg')] py-10 bg-cover bg-no-repeat">
            <div className="max-w-md mx-auto backdrop-blur-sm bg-white/50 px-10 py-5 rounded-md">
            <h2 className="text-3xl font-semibold mb-4">Assignment Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="w-full px-3 backdrop-blur-sm bg-white/50 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                        Marks
                    </label>
                    <input
                        type="number"
                        id="marks"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="thumbnailURL" className="block text-sm font-medium text-gray-700">
                        Thumbnail Image URL
                    </label>
                    <input
                        type="text"
                        id="thumbnailURL"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring backdrop-blur-sm bg-white/50 focus:border-blue-300"
                        value={thumbnailURL}
                        onChange={(e) => setThumbnailURL(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
                        Assignment Difficulty Level
                    </label>
                    <select
                        id="difficulty"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none backdrop-blur-sm bg-white/50 focus:ring focus:border-blue-300"
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
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
        </div>
        </div>
    );
};


export default CreateAssignment;
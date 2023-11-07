
const MySubCard = ({ data }) => {
    const { title, status, marks, givenMarks, feedback } = data;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 m-4 border-2 border-gray-300">
                <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                <div className="flex justify-between mb-4">
                    <p className=" font-semibold">Status: <span className="text-blue-600 ">{status}</span></p>
                    <p className="text-gray-600 font-semibold">Total Marks: {marks}</p>
                </div>
                <div className="flex justify-between mb-4">
                    <p className="text-gray-600 font-semibold">Obtained Marks: {givenMarks}</p>
                </div>
                {feedback && (
                    <div>
                        <p className="text-gray-600 font-bold mb-2">Feedback:</p>
                        <p className="text-gray-800">{feedback}</p>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default MySubCard;
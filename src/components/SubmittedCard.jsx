import {Link} from 'react-router-dom'


const SubmittedCard = ({data}) => {
    const {title,marks,name, _id} = data;
    

    return (
        <div>
            <div className="w-1/2 mx-auto bg-[#b2cade] my-7 rounded py-3 px-5">
                <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
                <p className="font-semibold my-1">Assignment marks: {marks}</p>
                <h1 className="font-semibold text-xl my-2">Examinee name: {name}</h1>
                
               <Link to={`/givenMarks/${_id}`}>
               <button className="py-1 px-3 bg-blue-500 hover:bg-blue-700 rounded text-gray-200 font-semibold">Give mark
                </button>
               </Link>
                
                
            </div>
            
        </div>
    );
};

export default SubmittedCard;
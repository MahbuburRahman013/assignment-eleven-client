// import { useState } from "react";

import axios from "axios";
import useAuth from "../hooks/useAuth";


const Modal = ({loadedData2}) => { 
    // const [pdfLink, setPdfLink] = useState('');
    // const [quickNote, setQuickNote] = useState('');
    // const [view, setView] = useState('')
    const {user} = useAuth();
    const submittedUser = user?.email;
    

    const handleSubmit2 = (e) => {
        e.preventDefault();
       
        
        const form = e.target;
        const file = form.file.value;
        const note = form.note.value;
        const allData = {...loadedData2,file,note,submittedUser,status:'submitted'};
        console.log(file)
       axios.post('http://localhost:5000/submitted-assignment',{allData})
       .then(res=>{
        if(res.data.acknowledged){
            alert('submitted complete')
        }
       })


    }

    


    return (
        <div>
            <dialog id="my_modal_4" className="modal w-full">
                <div className="modal-box w-11/12  bg-pink-100">

                    <div className="max-w-md mx-auto p-4 bg-pink-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Assignment Submission</h2>
                        <form onSubmit={handleSubmit2} className="mt-4">
                            <div className="mb-4">
                                <label htmlFor="pdfLink" className="block font-medium">PDF Link</label>
                                <input
                                    type="file"
                                    id="pdfLink"
                                    name="file"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quickNote" className="block font-medium">Quick Note</label>
                                <textarea
                                    id="quickNote"
                                    name="note"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 h-32"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default Modal;



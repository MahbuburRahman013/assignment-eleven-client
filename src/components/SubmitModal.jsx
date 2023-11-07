import {useLoaderData} from 'react-router-dom'
 

const SubmitModal = () => {
    const loadedData = useLoaderData();

    const {note,file, _id}  = loadedData;
    

const handleSubmit = e =>{
    e.preventDefault()
    console.log(_id)
}

    return (
        
                <div className="modal-box w-11/12 max-w-5xl">
                    {/* <PDFFile2 view={view}></PDFFile2> */}
                    <h1 className="font-semibold my-2">Note submitted by examinee: <span className="text-base">{note}</span></h1>
                    <h1 className=" my-2">PDF File Link: {file}</h1>
                    <form onSubmit={handleSubmit}>
                         <input placeholder="Give marks" className="w-1/2 mx-auto block px-3  py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-3" type="number" name="number" />

                         <textarea placeholder="Give your feedback" className="w-full px-3 py-2 border rounded-md focus:outline-none  focus:ring focus:border-blue-300" name="feedback"  cols="40" rows="5"></textarea>

                         <input className="btn btn-primary" type="submit" value="Submit" />
                           
                    </form>
                   
        </div>
    );
};

export default SubmitModal;
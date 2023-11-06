
// // import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import { Document, Page } from 'react-pdf';


// function PDFFile2({ pdfLink2 }) {

//     const pdfUrl = pdfLink2;
//   const numPages = 0; // Initialize the number of pages.

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     // Update the number of pages when the PDF is loaded successfully.
//     numPages = numPages;
//   };

//     // const docs = [
//     //     {
//     //         uri: pdfLink2,
//     //         fileType: 'pdf'

//     //     }
//     // ];

//     // return <DocViewer style={{height: 1000}} documents={docs} pluginRenderers={DocViewerRenderers} />;

//     return (
//         <div>
//           <h2 className="text-xl font-semibold">Remote PDF Viewer</h2>
//           <Document
//             file={pdfUrl}
//             onLoadSuccess={onDocumentLoadSuccess}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//               />
//             ))}
//           </Document>
//         </div>
//       );
    
// }
// // export default PDFFile2;

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const fileType = ['application/pdf'];
//     const handleSubmit = (e) => {

//         const pdfFile = e.target.files[0];

//         if (pdfFile) {
//             if (pdfFile && fileType.includes(pdfFile.type)) {
//                 let reader = new FileReader()
//                 reader.readAsDataURL(pdfFile)
//                 reader.onload = e => {
//                     setPdfLink(e.target.result)
//                 }
//             }
//             else {
//                 setPdfLink(null)
//             }
//         }
//         else {
//             console.log('error');
//         }

//     };


// const handleSubmit2 = (e) => {
//   e.preventDefault();
//   if (pdfLink !== null) {
//       setView(pdfLink)
//   } else {
//       setView(null)
//   }

//   const form = e.target;
//   const file = form.file.value;
//   const note = form.note.value;
//   console.log(pdfLink, note,file)



// }

// const newPlugin = defaultLayoutPlugin();

// const newPlugin = defaultLayoutPlugin();


// <dialog id="my_modal_5" className="modal">
//                             <div className="modal-box mt-8 w-11/12 rounded-none max-w-5xl">
//                                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//                                     {
//                                         view && <>
//                                             <Viewer fileUrl={view} plugins={[newPlugin]}></Viewer>
//                                         </>
//                                     }
//                                     {
//                                         !view && <>No PDF</>
//                                     }
//                                 </Worker>
//                                 {/* <PDFFile2 pdfLink2={pdfLink2}></PDFFile2> */}
//                             </div>
//                             <div className="modal-action">
//                                 <form method="dialog">
//                                     <button className="btn btn-circle">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//                                     </button>
//                                 </form>
//                             </div>
//                         </dialog>
import pdf from '../../../../B8A11-CRUD-and-JWT/A-11 PDF/assignment_category_0003.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFFile2 = ({ view }) => {
    console.log(view)

    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <div>
            <div>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>

        </div>
    );
};

export default PDFFile2;








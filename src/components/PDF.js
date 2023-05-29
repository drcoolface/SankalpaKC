import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../assets/research.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF = ({ isDarkMode }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNumPages = async () => {
      const doc = await pdfjs.getDocument(pdfFile).promise;
      setNumPages(doc.numPages);
    };

    fetchNumPages();
  }, []);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));
  };

  const buttonStyle = `px-10 py-2 mx-10  rounded ${
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
  }`;

  const pageNumberStyle = `text-lg font-medium ${
    isDarkMode ? 'text-white' : 'text-gray-800'
  }`;

  return (
    <div className="flex flex-col items-center">
      {numPages && (
        <>
          <div className="flex justify-between mx-10 mb-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={buttonStyle}
            >
              Previous Page
            </button>
            <div className={pageNumberStyle}>{`Page ${currentPage} of ${numPages}`}</div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === numPages}
              className={buttonStyle}
             
            >
              Next Page
            </button>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-lg">
              <Document file={pdfFile}>
                <Page pageNumber={currentPage} renderTextLayer={false} />
              </Document>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PDF;

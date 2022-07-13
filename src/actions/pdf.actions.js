import { DOWNLOAD_PDF, SET_PDF } from "../types/pdf.types";



 export const downloadPDF = () => {

     //Done for REDUX_SAGA
     console.log("in downloadPDF actions:");
     return { type: DOWNLOAD_PDF };
   };

   export const setPdf = (pdfData = null) => {
    if (pdfData) {
      console.log("in products action");
      return {
        type: SET_PDF,
        payload: pdfData,
      };
    }
  };
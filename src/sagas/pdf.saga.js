import { takeEvery, call, put } from "redux-saga/effects";
import { DOWNLOAD_PDF, SET_PDF } from "../types/pdf.types";
import productsService from '../services/products.service';
import pdfService from "../services/pdf.service";
import { setPdf } from "../actions/pdf.actions";
import jsPDF from 'jspdf'

const pdf_url = 'http://localhost:8080/downloadPDF';
 function* downloadPDF(args) {
    console.log("arguments",args);
  
    const requestOptions = ({
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/pdf' },
      body: JSON.stringify(args)
    })
  
    const pdfData = yield fetch(pdf_url, requestOptions);
    console.log("pdfData",pdfData);
    // const products = yield call(productsService.getAllProducts);
    const data = yield pdfData.pdf;
    console.log("data:",data);
    //const fileURL = URL.createObjectURL(pdfData);
    //console.log("in fileURL", fileURL);
        //Open the URL on new Window
        //  const pdfWindow = window.open();
        //  pdfWindow.location.href = fileURL;
    //  const data = yield pdfData.json();
     //yield put(Actions.downloadPDF(fileURL));
}

// function* downloadPDF() {
//   try {
//     console.log("in pdf saga");
//     const pdfData = yield call(pdfService.getpdf);
//     console.log("pdfData:",pdfData);
//     yield put(setPdf(pdfData));
//   } catch (e) {}
// }

     export function* waitFordownloadPDF() {
         yield takeEvery(DOWNLOAD_PDF, downloadPDF);
   }

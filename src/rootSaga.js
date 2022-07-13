import { all } from "redux-saga/effects";
import { waitForFetchProducts } from "./sagas/products.saga";
import { waitFordownloadPDF } from "./sagas/pdf.saga";

export default function* rootSaga() {
  yield all([waitForFetchProducts()]);
  yield all([waitFordownloadPDF()]);
}

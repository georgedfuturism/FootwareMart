import { SET_PDF } from "../types/pdf.types";

export const pdfInitialState = [];

const pdfReducer = (state = pdfInitialState, action) => {
  switch (action.type) {
    case SET_PDF:
      return [...action.payload];
     
    default:
      return state;
  }
};

export default pdfReducer;
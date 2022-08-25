import {
    API_VIEW_F, API_VIEW_S
 } from '../constants/types';
 
 const initialState = {
     product: [],
 };
 
 const viewReducer = (state = initialState, action) => {
     switch (action.type) {
         case API_VIEW_S:
             return { ...state, product: action.payload };
         case API_VIEW_F:
             return { ...state , product:[]};
         default:
             return state;
     }
 }
 
 export default viewReducer;
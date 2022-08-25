import { combineReducers } from 'redux';
import viewReducer from './view';
import api from './api';
import auth from './auth';
import productReducer from './add';
import deleteReducer from './delete';
import getReducer from './getupdate';
import updateReducer from './update';

const rootReducer = combineReducers({
    api,
    auth,
   productReducer,
   viewReducer,
   deleteReducer,
   getReducer,
   updateReducer,
})

export default rootReducer;

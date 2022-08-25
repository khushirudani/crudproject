import {
   API_ADD_F,API_ADD_S
} from '../constants/types';

const initialState = {
    product: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_ADD_S:
            return { ...state, product: action.payload };
        case API_ADD_F:
            return { ...state };
        default:
            return state;
    }
}

export default productReducer;
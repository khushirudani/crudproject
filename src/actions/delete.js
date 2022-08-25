import {
    API_DELETE,
} from "../constants/api";
import {
    API,
   API_DELETE_F,API_DELETE_S
} from "../constants/types";

export  const deleteproduct = (id) => ({
    type: API,
    payload: {
        url: API_DELETE,
        method: 'POST',
        data: id ,
        //headers:{'Content-Type': 'multipart/form-data'},
        success: (data) => ({
            type: API_DELETE_S,
            payload: data  
        }),
        error: (data) => ({
            type: API_DELETE_F,
            payload: data
        })
    }
})


import {
    API_PRODUCT,
} from "../constants/api";
import {
    API,
    API_GET_F,
    API_GET_S,
    API_UPDATE_F, API_UPDATE_S
} from "../constants/types";

export  const getproduct = (id) => ({
    type: API,
    payload: {
        url: API_PRODUCT+`/${id}`,
        method: 'GET',
        
        //headers:{'Content-Type': 'multipart/form-data'},
        success: (data) => ({

            type: API_GET_S,
            payload: data  
        }),
        error: (data) => ({
            type: API_GET_F,
            payload: data
        })
    }
})

export  const updateproduct=(id,data) => ({
    type: API,
    payload: {
        url: API_PRODUCT+`/${id}`,
        method: 'PUT',
        data:data,
        //headers:{'Content-Type': 'multipart/form-data'},
        success: (data) => ({

            type: API_UPDATE_S,
            payload: data  
        }),
        error: (data) => ({
            type: API_UPDATE_F,
            payload: data
        })
    }
})
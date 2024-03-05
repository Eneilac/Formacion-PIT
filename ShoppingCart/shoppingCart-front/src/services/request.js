import axios from 'axios';
import { API_BASE_URL } from '../constants/apiPath';



export const get = (path) => {
    return axios.get(API_BASE_URL + path,
        {
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        .then(response =>{
            return response.data
        } )
        .catch(error => {
            console.log(error)
        })
}

export function post(data) {
    console.log(data)
    try {
        return axios.post(API_BASE_URL + '/items', data,
            {
                headers: { "Content-type": "application/json;charset=UTF-8" },
                'data': JSON.stringify(data),

            }
        )
    } catch (error) {
        return error;
    }

}

export function patch(path, data) {
    try {
        return fetch(API_BASE_URL + path, {
            method: "PATCH",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            'body': JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

}

export function del(path, id) {
    try {
        return fetch(API_BASE_URL + path + id, {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        });
    } catch (error) {
        console.log(error);
    }

}


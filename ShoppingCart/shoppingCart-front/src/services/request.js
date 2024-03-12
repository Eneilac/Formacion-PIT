import axios from 'axios';
import { API_BASE_URL } from '../constants/apiPath';



export const get = (path) => {
    return axios.get(API_BASE_URL + path,
        {
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}

export function post(data) {
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

//*Temporal
export function postItem(data) {

    let newData = {
        id_cart: 1,
        id_tshirt: data.id
    }

    try {
        return axios.post(API_BASE_URL + '/carts/item', newData,
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

export function del(data) {
    try {
        return fetch(API_BASE_URL + data, {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error("Error:", error);
                throw error;
            });
    } catch (error) {
        console.log(error);
    }
}


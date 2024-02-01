import axios from 'axios';
import { BASE_URL } from '../constants/constants';

/**
 * Request para el login de un usuario
 * @param {*} credentials 
 * @returns 
 */
export const login = (credentials) => {
    return axios.post(BASE_URL + '/auth/login',
        credentials, {
        headers: { "Content-type": "application/json;charset=UTF-8" }
    }).then(data => {
        localStorage.setItem('accessToken', data.data);
        return data;
    }).catch(error => {
        console.log(error.code)
    })
}

/**
 * Request para el rigistro de un user
 * @param {*} credentials 
 * @returns 
 */
export const register = (credentials) => {
    return axios.post(BASE_URL + '/users',
        credentials,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        }).catch(error => {
            console.log(error)
        })
}








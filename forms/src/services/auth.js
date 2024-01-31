import axios from 'axios';
import { BASE_URL } from '../constants/constants';


export const login = (loginUser) => {
    return axios.post(BASE_URL + '/auth/login',
        loginUser, {
        headers: { "Content-type": "application/json;charset=UTF-8" }
    }).then(data => {
        localStorage.setItem('accessToken', data.data);
        return data;
    }).catch(error => {
        console.log(error.code)
    })


}








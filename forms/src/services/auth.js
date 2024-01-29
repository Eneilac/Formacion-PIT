import axios from 'axios';
import { BASE_URL } from '../constants/constants';


export const login = (loginUser) => {
    return axios.post(BASE_URL + '/auth/login',
        loginUser, {
        headers: { "Content-type": "application/json;charset=UTF-8" }
    })
}


export const logout = () => {
    localStorage.removeItem('accessToken')
}


export const isLoggedIn = () => {
    if (localStorage.getItem('accessToken') !== null) {
        return true
    }
    return false;
}





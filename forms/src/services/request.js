import { BASE_URL } from "../constants/constants";
import { toast } from 'react-toastify';



export async function get(path) {
    try {
        return await fetch(BASE_URL + path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error);
    }
}

export function post(path, data) {
    return fetch(BASE_URL + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // Usar directamente 'body' en lugar de 'body': JSON.stringify(data)
    })
}

export function patch(path, data) {
    return fetch(BASE_URL + path, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

export function del(path) {
    return fetch(BASE_URL + path, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .catch(error => {
            toast.error("Error al borrar un usuario")
            console.log(error);
        })
}

export function checkToken(path, credentials) {

    return fetch(`${path} `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
        }),
        credentials: 'include',
    });
}
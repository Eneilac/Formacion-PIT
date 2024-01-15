import { BASE_URL } from "../constants/constants";


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
    fetch(BASE_URL + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        'body': JSON.stringify(data)
    })
        .catch(error => {
            console.log(error);
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
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json(); // o response.text() u otros métodos según tus necesidades
    })
    .catch(error => {
        console.log(error);
        throw error; // Asegúrate de lanzar el error nuevamente para que sea capturado correctamente
    });
}




export function del(path) {
    fetch(BASE_URL + path, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .catch(error => {
            console.log(error);
        })
}
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
export function put(path) {
    fetch(BASE_URL + path)
        .then()
        .then()
        .catch(error => {
            console.log(error);
        })
}
export function patch(path) {
    fetch(BASE_URL + path)
        .then()
        .then()
        .catch(error => {
            console.log(error);
        })
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
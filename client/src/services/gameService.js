import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    // const response = await fetch(baseUrl, { 
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'aplication/json'
    //     },
    //     body: JSON.stringify(gameData)

    // });

    // const result = await response.json();

    return result; 
}

export const get = request.bind(null, 'GET'); 
export const post = request.bind(null, 'POST'); 
export const put = request.bind(null, 'PUT'); 
export const remove = request.bind(null, 'DELETE'); 
export const patch = request.bind(null, 'PATCH'); 
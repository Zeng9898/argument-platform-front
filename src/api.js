import axios from "axios";


const tagRequest = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type":"application/json"}
});


export const apiUserLogin = data => tagRequest.post('/users/1/posts',data);
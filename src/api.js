import axios from "axios";


const tagRequest = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type":"application/json"}
});


export const tagUpload = data => tagRequest.post('/api',data);
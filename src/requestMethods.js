import React from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1";


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

// export const userRequest = axios.create({
//   baseURL: "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
//   header: { token: `Bearer ${TOKEN}` },
// });
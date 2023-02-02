import axios, { AxiosInstance } from "axios"

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "https://server.daraan.site/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        //'Access-Control-Allow-Credentials': 'include',
        //'Access-Control-Allow-Headers': '*',
        //'Access-Control-Allow-Origin': '*'
        //'Content-Type': 'multipart/form-data',
    }
})

export default axiosIntance
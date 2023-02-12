import axios, { AxiosInstance } from "axios"

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "http://server.daraan.site/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        //'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
    }
})

export default axiosIntance
import axios, { AxiosInstance } from "axios"

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "https://server.daraan.site/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default axiosIntance
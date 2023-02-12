import axios from "./Axios";
import { AxiosResponse } from "axios";
import { User } from "@/Interfaces/User";
import { StudentLogin } from "@/Interfaces/StudentLogin";

export const getStudent = async () => {
    const res = await axios.get("/dashboard/getstudent")
    return res
}

export const postLoginScores = async (student: StudentLogin) => {
    const res = await axios.post("/dashboard/scores", student)
    return res
}

export const postDownloadScores = async (student: any) => {
    const res = await axios.post("/dashboard/scores/download", student)
    return res
}


export const deleteLoginStudent = async () => {
    const res = await axios.delete("/dashboard/deletedata")
    return res
}


import axios from "./Axios";
import { AxiosResponse } from "axios";
import { User } from "@/Interfaces/User";

export const getData = async () => {
    const res = await axios.get("/getData")
    return res
}
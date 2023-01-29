import axios from "./Axios";
import { AxiosResponse } from "axios";
import { Anecdota } from "@/Interfaces/Anecdota";

export const getAnecdotas = async () => {
    const res = await axios.get("/anecdotas")
    return res
}

export const putAcceptDev = async (id:any) => {
    const res = await axios.put("/dev/aceptar/anecdota", id)
    return res
}

export const putAnecdotaDev = async (id: any, anecdota: any) => {
    const res = await axios.put("/dev/edit/anecdota/"+id, anecdota)
    return res
}

export const getAnecdotasDev = async () => {
    const res = await axios.get("/dev/anecdotas")
    return res
}

export const deleteAnecdota = async (anecdota: any) => {
    const res = await axios.delete("/delete/anecdota/"+anecdota)
    return res
}

export const getAnecdota = async (anecdota: any) => {
    const res = await axios.get("/anecdota/"+anecdota)
    return res
}

export const getAnecdotasUser = async (id: any) => {
    const res = await axios.get("/anecdotas/user/"+id)
    return res
}

export const getAnecdotasList = async (id: any) =>{
    const res = await axios.post("/anecdotasList", id)
    return res
}

export const postSend = async (anecdota: any) => {
    const res = await axios.post("/anecdotas", anecdota)
    return res
}
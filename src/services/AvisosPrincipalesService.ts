import axios from "./Axios";
import { AxiosResponse } from "axios";


export const getAvisosPrincipalesSecundarios = async () => {
    const res = await axios.get("/dev/aviso-principal/all/secundarios")
    return res
}
export const getAvisoPrincipalPrincipal = async () => {
    const res = await axios.get("/dev/aviso-principal/all/principales")
    return res
}

export const deleteAvisoPrincipal = async (id: any) => {
    const res = await axios.delete("/dev/aviso-principal/eliminar/"+id)
    return res
}

export const postAvisoPrincipal = async (aviso: any) => {
    const res = await axios.post("/dev/aviso-principal/agregar", aviso, {headers: {'Content-Type': 'multipart/form-data'}})
    return res
}

export const getAvisosPrincipales = async () => {
    const res = await axios.get("/dev/aviso-principal/all")
    return res
}

export const getAvisoPrincipal = async (id: any) => {
    const res = await axios.get("/dev/aviso-principal/view/"+id)
    return res
}

export const putAvisoPrincipal = async (id: any, aviso:any) => {
    const res = await axios.put("/dev/aviso-principal/editar/"+id, aviso, {headers: {'Content-Type': 'multipart/form-data'}})
    return res
}
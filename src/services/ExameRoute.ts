import axios from "axios";
import api from "./api";

export async function marcarExame(id_doctor:string, valor:string, tipo_de_exame:string, data_do_exame:string){
    return await api.post('/exam_medical',`${id_doctor}, ${valor} ,${tipo_de_exame}, ${data_do_exame}`)
}
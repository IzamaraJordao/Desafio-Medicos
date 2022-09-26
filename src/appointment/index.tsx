import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container,Title,Input,ButtonC, ButtonR} from "./styled";
import  { useRouter } from "next/router";

export default function Appointment() {
    const router = useRouter()
 const [formValues, setFormValues] = useState({
   
    id_doctor : "",
    valor: "",
    name: "",
    data_consulta: new Date,
    

 })

   async function handleAppointment(){
       await axios.post('http://localhost:4000/appointment_doctor',{
              id_doctor: formValues.id_doctor,
              name: formValues.name,
              valor: formValues.valor,
              data_consulta: formValues.data_consulta});      
       await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }) 
    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
     const handleReturn = () => {
        router.push('/home')
    }
     
        


  return (
    <Container>
        <div className="Title">
            <Title>Consulta</Title>
        </div>
        <div className="Form">
            <form>
                <div>
                    <label>Nome*</label>
                    <Input type="text" placeholder="Nome" onChange={handleInputChange}/>
                </div>
                <div >
                    <label>Data*</label>
                    <Input type="date" placeholder="Data" onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Medico*</label>
                    <Input type="text" placeholder="Medico" onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Valor*</label>
                    <Input type="text" placeholder="Valor"onChange={handleInputChange} />
                </div>
                <div>
                    <ButtonC type="submit" onClick={handleAppointment}>Confirmar</ButtonC>
                </div>
                <div>
                    <ButtonR type="submit" onClick={handleReturn}>Voltar</ButtonR>
                </div>

            </form>  
        </div>      
    </Container>
  );
}
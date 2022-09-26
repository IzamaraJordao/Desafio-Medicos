import { marcarExame } from "../services/ExameRoute";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Container,Title,Input,ButtonC } from "./styled";
import { useRouter } from "next/router";

interface NovaConsulta{
    id_doctor:string;
    valor: string,
    tipo_de_exame: string,
    data_do_exame: string,
}

export function Exame() {
  const router = useRouter();
  const [date_Exa, setDate] = useState('');
  const [id_doctor, setId_doctor] = useState("");
  const [valor, setValor] = useState("");
  const [tipo_exame, setTipo_exame] = useState("");
  const [marcar, setMarcar] = useState();
  const [novaConsulta, setNovaConsulta] = useState({});

  const [formValues, setFormValues] = useState({
    id_doctor: 0,
    valor: "",
    tipo_de_exame: "",
    data_do_exame: "",
  });

  async function handleExame() {
    
    const marcarCons = {
    id_doctor: id_doctor,
    tipo_do_exame: tipo_exame,
    data_do_exame: date_Exa,
    valor: valor,
    };
    await marcarExame(
      marcarCons.id_doctor,
      marcarCons.valor,
      marcarCons.tipo_do_exame,
      marcarCons.data_do_exame
    );   
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
        <Title>Exame</Title>
      </div>
      <div className="Form">
        <form>
          <div className="Name">
            <label>Tipo de Exame*</label>
            <Input
              name={"tipo_de_exame"}
              type="text"
              placeholder="Nome"
              value={tipo_exame}
              onChange={(event) => {
                setTipo_exame(event.target.value);
              }}
            />
          </div>
          <div className="Data">
            <label>Data*</label>
            <Input
              name={"data_do_exame"}
              type={'text'}
              placeholder="Data"
              value={date_Exa}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>
          <div className="doctor">
            <label>Medico*</label>
            <Input
              name={"id_doctor"}
              type="text"
              placeholder="Medico"
              value={id_doctor}
              onChange={(event) => {
                setId_doctor(event.target.value);
              }}
            />
          </div>
          <div className="Valor">
            <label>Valor*</label>
            <Input
              name={"valor"}
              type="text"
              placeholder="Valor"
              value={valor}
              onChange={(event) => {
                setValor(event.target.value);
              }}
            />
          </div>
          <div className="Confirmar">
            <ButtonC type="submit" onClick={handleExame}>
              Confirmar
            </ButtonC>
          </div>
          <div className="Voltar">
            <ButtonC type="submit" onClick={handleReturn}>
              Voltar
            </ButtonC>
          </div>
        </form>
      </div>
    </Container>
  );
}

//pagina home
import React from "react";
import { Container,Consulta,Exame,Financeiro } from "./styled";
import { useRouter } from "next/router";

export default function DashboardM() {
    const router = useRouter()

    const handleConsulta = () => {
        router.push('/appointment')
    }
    const handleExame = () => {
        router.push('/exam')
    }
    

  return (
    <Container>
      <div className="Title">
        <h1>
          Happy<small>Life</small>
        </h1>
      </div>
      <div className="consulta">
        <Consulta onClick={handleConsulta}>Marcar Consulta</Consulta>
      </div>
      <div className="exame">
        <Exame onClick={handleExame}>Agendar Exame</Exame>
      </div>
    </Container>
  );
}

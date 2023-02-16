import React from 'react'
import { Container } from 'react-bootstrap';
import emergs from "../../images/servicos/banneremerg.png"
import emergen from "../../images/emergen.png"
import "./style.css";

function Banneremerg() {
  return (
    <>
    <Container className="full m-0 p-0">
            <img className="emergsimg-img" src={emergs} alt="" srcset="" />          
            <Container className="emergsimg">
                <img className="my-2" src={emergen} alt="" srcset="" />
                <h3 >Emergência Médica 24h</h3>
                <p className="my-2 ">Estrutura de apoio médica ao paciente</p>
            </Container>
    </Container>
    </>
  )
}

export default Banneremerg

import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import diagimg from "../../images/diagimg.png";
import { Container } from 'react-bootstrap';
import "./style.css"

function Diagimag() {
  return (
    <>
    <Topbar/>
    <img className="emprevbanner"src={diagimg} alt="" srcset="" />
    <Container className="p-2 my-3 align-items-center justify-content-center d-flex flex-column">
      <h3 className="my-3 text-justify text-center">Verifique a disponibilidade e Agende sua consulta</h3>
      <a href="https://api.whatsapp.com/send?phone=5521974087703&text=Olá! Gostaria de saber sobre Exames de Imagem." rel='noreferrer' target="_blank" className="WhatsappButton my-2"> </a>
    </Container>    
    <Breadcrumb crumb2="Serviços" href="/2" crumb="Diagnostico por imagem"/>
    <Footer2/>
    </>
  )
}

export default Diagimag

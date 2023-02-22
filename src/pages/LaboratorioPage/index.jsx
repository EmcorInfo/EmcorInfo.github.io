import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Labpage from "../../images/labpage.png";
import { Container } from 'react-bootstrap';
import "./style.css"

function LabPage() {
  return (
    <>
    <Topbar/>
    <img className="emprevbanner"src={Labpage} alt="" srcset="" />
    <Container className="p-2 my-3 align-items-center justify-content-center d-flex flex-column">
      <h3 className="my-3 text-justify text-center">Duvidas sobre Exames Laboratoriais</h3>
      <a href="https://api.whatsapp.com/send?phone=5521974087703&text=Olá! Gostaria de saber sobre Exames de laboratório." rel='noreferrer' target="_blank" className="WhatsappButton my-2"> </a>
    </Container>    
    <Breadcrumb crumb2="Serviços" href="/2/" crumb="Laboratório"/>
    <Footer2/>
    </>
  )
}

export default LabPage

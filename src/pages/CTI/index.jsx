import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import bannercti from "../../images/bannercti.png";
import { Container } from 'react-bootstrap';
import "./style.css"

function Cti() {
  return (
    <>
    <Topbar/>
    <img className="emprevbanner"src={bannercti} alt="" srcset="" />
    <Container className="p-2 my-3 align-items-center justify-content-center d-flex flex-column">
      <h3 className="my-3 text-justify text-center">Duvidas sobre internação ou horários de visitas</h3>
      <a href="https://api.whatsapp.com/send?phone=5521986436540&text=Olá! Gostaria de falar sobre CTI." rel='noreferrer' target="_blank" className="WhatsappButton my-2"> </a>
    </Container>    
    <Breadcrumb crumb2="Serviços" href="/servic/" crumb="CTI"/>
    <Footer2/>
    </>
  )
}

export default Cti

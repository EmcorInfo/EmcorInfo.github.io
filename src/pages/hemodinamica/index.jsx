import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Footer2 from '../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Hemobanner from "../../images/bannerhemo.png";
import { Container } from 'react-bootstrap';
import "./style.css"

function Hemopage() {
  return (
    <>
    <Topbar/>
    <img className="emprevbanner"src={Hemobanner} alt="" srcset="" />
    <Container className="p-2 my-3 align-items-center justify-content-center d-flex flex-column">
      <h3 className="my-3 text-justify text-center">Para falar sobre exames de Hemodinâmica</h3>
      <a href="https://api.whatsapp.com/send?phone=5521986436540&text=Olá! Gostaria de falar sobre Hemodinâmica." rel='noreferrer' target="_blank" className="WhatsappButton my-2"> </a>
    </Container>    
    <Breadcrumb crumb2="Serviços" href="/servic/" crumb="Hemodinâmica"/>
    <Footer2/>
    </>
  )
}

export default Hemopage

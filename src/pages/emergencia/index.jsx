import React from 'react'
import Topbar from './../../components/topbar/Topbar';
import Footer2 from './../../components/footer2/Footer2';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import Banneremerg from '../../components/bannerEmerg';
import "./style.css"
import { Container } from 'react-bootstrap';

function Emerg() {
  return (
    <>
    <Topbar/>
    <Banneremerg/>
    <Container className="p-2 my-3 align-items-center justify-content-center d-flex flex-column">
      <h3 className="my-3 text-justify text-center">Saber mais ou tirar dúvidas?</h3>
      <a href="https://api.whatsapp.com/send?phone=5521974087703&text=Olá! Gostaria de falar sobre a emergência ou tirar dúvidas" rel='noreferrer' target="_blank" className="WhatsappButton my-2"> </a>
    </Container>    
    <Breadcrumb crumb2="Serviços" href="/2" crumb="Emergência"/>
    <Footer2/>
    </>
  )
}

export default Emerg

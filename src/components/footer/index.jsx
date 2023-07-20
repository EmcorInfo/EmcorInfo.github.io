import React from 'react'
import "./style.css"
import { Button  } from 'react-bootstrap';
import { FaInstagram , FaFacebookSquare, FaTwitter } from "react-icons/fa"
import emcorlogo from "../../images/emcorlogo.png"

function Footer2() {
  return (
    <div className="footbg text-white row">
            <div className="esquerda col-lg">
                <a className="logofooter" href="/"><img src={emcorlogo} alt="logo"/></a>
                <div className="links my-4">
                    <a href="/">Home </a>
                    ||
                    <a href="/ohospital"> Sobre </a>
                    ||
                    <a href="/servic/"> Serviços </a>
                    ||
                    <a href="/contato"> Contato</a>
                </div>
                <Button className="navButton m-3" href="/resultado" >Resultados</Button>
            </div>
            <div className="centro col-lg mx-1 links linksCenter align-items-start">
                    <a className="mb-3 d-flex flex-row align-items-center" href="https://goo.gl/maps/L3p8PyhBZRcXha1a8" target="_blank" rel="noopener noreferrer">
                        <i className="fa1 fa fa-map-marker me-2" />
                        <div className="d-flex flex-column align-items-start" >
                            <span style={{fontSize: "16px", fontWeight: "normal"}}>
                                Rua Nelson Ramos,
                            </span> 
                            <span style={{fontSize: "16px"}}>
                                733 Centro Nova Iguaçu - RJ
                            </span>
                        </div>
                    </a>
                    <a className="mb-3 d-flex flex-row align-items-center" href="tel:+552137598101">
                       <i className="me-2 fa1 fa fa-phone"/>
                       <span>(21) 3759-8101</span>
                    </a>
                    <a href="mailto:atendimento@hospitalemcor.com.br?Subject=Contato%20do%20Site">
                        <i className="me-2 fa1 fa fa-envelope" aria-hidden="true"/>
                        <span>atendimento<span>@hospitalemcor.com.br</span></span>
                    </a>
                    
            </div>
            <div className="direita text-center col-lg">
                <h3 >Nossas Redes</h3>
                <div className="footersocial">
                    <a href="https://www.facebook.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaFacebookSquare className="footersocialitem ms-0"/></a>
                    <a className="mx-3" href="https://www.instagram.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaInstagram className="footersocialitem"/></a>
                    <a href="https://twitter.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaTwitter className="footersocialitem"/></a>
                </div>
            </div>
        <div className="links criadopor align-items-center d-flex">
            <a href="https://mavsleo.com.br" target="_blank" rel="noopener noreferrer">Criado por MAVsLEO &copy; • 2016 </a>
            
            <a className="ms-5" href="/adm/login">
                <div className="companycog">
                    <i className="fa fa-cog " aria-hidden="true"/>
                </div>
      </a>
        </div>
    </div>
  )
}

export default Footer2

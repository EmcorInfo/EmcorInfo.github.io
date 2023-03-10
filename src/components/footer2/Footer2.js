import { Button } from "react-bootstrap";
import { FaInstagram , FaFacebookSquare, FaTwitter } from "react-icons/fa"
import React from "react";
import "./footer2.css"
import {
  Box,
  Container,Container2,
  Row,
  Column,
  FooterLink,FooterLinkLeft,
  Heading,Company,FooterLinkCenter,
  Img
} from "./Footer2Styles";
import emcorlogo from "../../images/emcorlogo.png"


  
const Footer2 = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column className="left">
          <FooterLink className="logofooter" href="/"><Img src={emcorlogo} alt="EMCOR" /></FooterLink>

            <Container2 className="container-footer2-left">
                <FooterLinkLeft href="/"> Home </FooterLinkLeft>
                ||
                <FooterLinkLeft href="/ohospital"> Sobre </FooterLinkLeft>
                ||
                <FooterLinkLeft href="/servic/"> Serviços </FooterLinkLeft>
                ||
                <FooterLinkLeft href="/contato"> Contato </FooterLinkLeft>
            </Container2>
            <Button className="navButton m-3" href="/resultado" >Resultados</Button>
          </Column>
          <Column className="center"style= {{padding: 0}}>
            <Container>
    			<FooterLinkCenter target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/L3p8PyhBZRcXha1a8"><Container2><i className="fa1 fa fa-map-marker" /><Container className="itens-center"style={{marginLeft: "20px"}}><span style={{fontSize: "16px", fontWeight: "normal"}}>Rua Nelson Ramos,</span> <span style={{fontSize: "16px"}}>733 Centro Nova Iguaçu - RJ</span></Container></Container2>
                </FooterLinkCenter>
                <Container2  style={{ fontWeight:"bold",marginBottom: "20px",alignItems:"center",justifyContent:"center"}}>
                    <i class="fa1 fa fa-phone"></i>
                    <p className="itens-center" style={{fontSize: "16px",margin: "8px 0px 8px 15px",textAlign:"center"}}>(21) 3759-8101</p>
                </Container2>
                <FooterLinkCenter className="itens-center" href="mailto:atendimento@hospitalemcor.com.br?Subject=Contato%20do%20Site"><Container2><i className="fa1 fa fa-envelope" /><span className="itens-center" style={{fontSize: "14px",marginLeft: "12px"}}> atendimento@hospitalemcor.com.br </span></Container2>
                </FooterLinkCenter>
    		</Container>
          </Column>
          <Column className="colunasobre p-2">
            <Heading>Nossas Redes</Heading>
            <br/>
            <div className="footersocial">
                <a href="https://www.facebook.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaFacebookSquare className="footersocialitem ms-0"/></a>
                <a href="https://www.instagram.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaInstagram className="footersocialitem"/></a>
                <a href="https://twitter.com/hospitalemcor" target="_blank" rel="noopener noreferrer" ><FaTwitter className="footersocialitem"/></a>
            </div>
          </Column> 
        </Row>
        
      </Container>
      <a href="https://oencouracado.github.io/" target="_blank" rel="noopener noreferrer">
        <Company className="company" 
        style={{position: "absolute", bottom: "-1%",left:"5%"}}>
          MAVs LEO &copy; 2016
        </Company>
      </a>
      
      
    </Box>
  );
};
export default Footer2;
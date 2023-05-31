import React from "react";
import { Container } from "react-bootstrap";
import "./style.css"
import logo from "../../images/emcorsfundo.png"

const NotFound = () => {
  return (
    <Container className="notfound">
      <a className="linka" href="/"><img className="linkaimg" src={logo} alt="" srcset="" /></a>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a className="linka" href="/">Ir para a página Principal</a>
    </Container>
    
  );
};

export default NotFound;

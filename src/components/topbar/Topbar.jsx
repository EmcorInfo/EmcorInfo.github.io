import React from "react";
import "./topbar.css";
import emcorsfundo from "../../images/emcorsfundo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";


function Topbar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="topbar">
            <Container className="topConteiner" >
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    height={65}
                    src= {emcorsfundo}
                    className= "img-top d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{fontSize: 20}} className="ms-auto">
                    <Nav.Link href="/">Início</Nav.Link>
                    <NavDropdown title="Sobre" id="basic-nav-dropdown">
                        <NavDropdown.Item href="Ohospital">O Hospital</NavDropdown.Item>
                        <NavDropdown.Item href="plano">Planos e Convênios</NavDropdown.Item>
                        <NavDropdown.Item href="/politica-de-privacidade">Política de Privacidade</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="servicos">Serviços</Nav.Link>
                    <NavDropdown title="Contato" id="basic-nav-dropdown">
                        <NavDropdown.Item href="contato">Fale Conosco</NavDropdown.Item>
                        <NavDropdown.Item href="trabalhe-conosco">Trabalhe Conosco</NavDropdown.Item>
                    </NavDropdown>
                    <Button className="navButton m-1" href="resultado" >Resultados</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Topbar
import React from 'react';
import { Container } from 'react-bootstrap';
import "./style.css";
import logo from "../../images/emcorsfundo.png"


function EmConstrucao() {
    return (
        <Container className=''>
            <Container className="row">
                <Container className='col-sm-12 d-flex justify-content-center align-items-center mt-5'>
                    <a href='/'><img src={logo} alt="" srcset="" style={{height: "15vw"}}/></a>
                </Container>
            </Container>    
            <Container className="row">
                <Container className='col-sm-12 d-flex justify-content-center align-items-center mt-5'>
                    <i className="fa fa-cog fa-spin fa-2xl" aria-hidden="true" style={{fontSize:'5rem'}} ></i>
                </Container>
            </Container>    
            <Container className="row">
                <Container className='h1 col-sm-12 d-flex justify-content-center align-items-center mb-5'>
                    <p className='text'>Em Construção </p><i className="fas fa-screwdriver-wrench fa-2xl" />
                </Container>
            </Container>
        </Container>
                
    
    );
}

export default EmConstrucao;
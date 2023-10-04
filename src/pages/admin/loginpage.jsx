import React from 'react'
import Login from './../../components/Manager/login/index';
import { Container } from 'react-bootstrap';
import "./loginpage.css"


function Loginpage({ app }) {
  return (
    <Container className='containeres d-flex justify-content-center align-items-center'>
      <a href="/" className='voltar'>
        <i className="fa fa-arrow-circle-left" aria-hidden="true">Voltar</i>
      </a>
      <Login app={app}/>
    </Container>
  )
}

export default Loginpage

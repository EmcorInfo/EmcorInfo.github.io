import React from 'react'
import SideMenu from '../../components/sidebar';
import { Container } from 'react-bootstrap';
import VagasList from '../../components/Manager/VagasList';

function Vagas() {
  return (
    <Container style={{marginLeft: 130}}>
        <SideMenu/>
        <VagasList/>
    </Container>
  )
}

export default Vagas

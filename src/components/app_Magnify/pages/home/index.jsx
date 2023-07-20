import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ItemsList from '../../components/itemList'

function Homeapp() {
  return (
    <Container className="d-flex flex-column justify-content-center border rounded border-dark" style={ {height: "95%", width: "90%", backgroundColor: "rgba(0 , 0, 0, 0.85)" } }>
      <h2 className="text-center text-white">Teste</h2>
      <ItemsList/>
    </Container>
  )
}

export default Homeapp

import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./style.css"

function Botoes({itens}) {
  return (
    <Container className="my-4 px-4">
        <Container className="row row-cols-auto">
          {itens.map((item) =>(
              <Container className="col-md p-1">
                <Button className="botaolista">{item.name}</Button>
              </Container>))}
        </Container>
      </Container>
  )
}

export default Botoes

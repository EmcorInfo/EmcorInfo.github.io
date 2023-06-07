import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./stylevagas.css";

const VagasList = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    buscarVagas();
  }, []);

  const buscarVagas = async () => {
    try {
      const response = await axios.get("http://hospitalemcor.com.br/api/index.php?table=vagas");
      setVagas(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const deletarVagas = (id) => {
    console.log(id)
    axios.delete(`http://hospitalemcor.com.br/api/index.php?table=vagas&id=${id}`)
    .then((response) => {
      console.log(response.data);
      buscarVagas(); // Atualiza a lista de Vagas após a exclusão
    })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className='mb-5'>
      <h2 className='d-flex justify-content-center mb-4'>Lista de Vagas</h2>
      <Container className='bordas d-flex justify-content-center flex-column rounded border border-dark'>
        
        <ListGroup className='mb-2' horizontal>
            <ListGroupItem className='alte'><p className='m-1 text-center'>Titulo da Vaga</p></ListGroupItem>
            <ListGroupItem className='desc2'><p className='m-1 text-center'>Descrição</p></ListGroupItem>
            <ListGroupItem className='desc2'><p className='m-1 text-center'>Requisitos</p></ListGroupItem>
            <ListGroupItem className='alte d-flex flex-column'>
              <p className='mb-2 text-center'>Deletar?</p>
            </ListGroupItem>
          </ListGroup>
        {vagas.map((vagas, id) => (
          <ListGroup className='mb-2' key={id} horizontal>
            <ListGroupItem className='alte'><p>{vagas.titulo}</p></ListGroupItem>
            <ListGroupItem className='desc'><p>{vagas.descricao}</p></ListGroupItem>
            <ListGroupItem className='desc'><p>{vagas.requisitos}</p></ListGroupItem>
            <ListGroupItem className='alte d-flex flex-column'>
              <i
                className="deletar fa fa-trash-o"
                aria-hidden="true"
                onClick={() => deletarVagas(vagas.id)}
              />
            </ListGroupItem>
          </ListGroup>
        ))}
      </Container>
    </Container>
  );
};

export default VagasList;


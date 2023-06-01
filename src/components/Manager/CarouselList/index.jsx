import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./style.css";

const CarouselList = ({ updateCarrossel, onImageDeleted }) => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    buscarImagens();
  }, [updateCarrossel]);

  const buscarImagens = () => {
    axios.get('http://localhost:3001/api/buscar-imagens')
      .then((response) => {
        setImagens(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletarImagem = (id) => {
    axios.delete('http://localhost:3001/api/deletar-imagem', { data: { id } })
    .then((response) => {
      console.log(response.data);
      buscarImagens(); // Atualiza a lista de imagens após a exclusão
      if (onImageDeleted) {
        onImageDeleted(); // Aciona a função de callback do pai
      }
    })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className='m-5'>
      {imagens.map((imagem, id) => (
        <ListGroup key={id} horizontal>
          <ListGroupItem className='imagem'>
            <img className="d-block lista-imagem" src={imagem.img} alt={imagem.alt} />
          </ListGroupItem>
          <ListGroupItem className='alt'><p>{imagem.alt}</p></ListGroupItem>
          <ListGroupItem className='alt'><p>{imagem.caption_title}</p></ListGroupItem>
          <ListGroupItem className='alt'><p>{imagem.caption_text}</p></ListGroupItem>
          <ListGroupItem className='alt'>
            <i
              className="deletar fa fa-trash-o"
              aria-hidden="true"
              onClick={() => deletarImagem(imagem.id)}
            />
          </ListGroupItem>
        </ListGroup>
      ))}
    </Container>
  );
};

export default CarouselList;


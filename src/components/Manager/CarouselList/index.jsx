import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./style.css";

const CarouselList = ({ updateCarrossel, onImageDeleted }) => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    buscarImagens();
  }, [updateCarrossel]);

  const buscarImagens = async () => {
    try {
      const response = await axios.get("http://hospitalemcor.com.br/api/index.php?table=carrossel");
      setImagens(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const deletarImagem = (id) => {
    console.log(id)
    axios.delete(`http://hospitalemcor.com.br/api/index.php?table=carrossel&id=${id}`)
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
    <Container className='mb-5'>
      <h2 className='d-flex justify-content-center mb-4'>Lista de Imagens no carrossel</h2>
      <Container className='p-0 rounded border border-dark'>
        
        <ListGroup className='mb-2' horizontal>
            <ListGroupItem className='alt'><p className='text-center'>Imagem</p></ListGroupItem>
            <ListGroupItem className='alt'><p className='text-center'>Texto descritivo</p></ListGroupItem>
            <ListGroupItem className='alt'><p className='text-center'>Titulo da Capitulação</p></ListGroupItem>
            <ListGroupItem className='alt'><p className='text-center'>Texto da Capitulação</p></ListGroupItem>
            <ListGroupItem className='alt d-flex flex-column'>
              <p className='mb-2 text-center'>Deletar?</p>
            </ListGroupItem>
          </ListGroup>
        {imagens.map((imagem, id) => (
          <ListGroup className='mb-2' key={id} horizontal>
            <ListGroupItem className='alt'>
              <img className="d-block lista-imagem" src={imagem.img} alt={imagem.alt} />
            </ListGroupItem>
            <ListGroupItem className='alt'><p>{imagem.alt}</p></ListGroupItem>
            <ListGroupItem className='alt'><p>{imagem.caption_title}</p></ListGroupItem>
            <ListGroupItem className='alt'><p>{imagem.caption_text}</p></ListGroupItem>
            <ListGroupItem className='alt d-flex flex-column'>
              <i
                className="deletar fa fa-trash-o"
                aria-hidden="true"
                onClick={() => deletarImagem(imagem.id)}
              />
            </ListGroupItem>
          </ListGroup>
        ))}
      </Container>
    </Container>
  );
};

export default CarouselList;


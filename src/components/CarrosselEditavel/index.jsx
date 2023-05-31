import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const CarrosselEdit = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    buscarImagens();
  }, []);

  const buscarImagens = () => {
    axios.get('http://localhost:3001/api/buscar-imagens')
      .then((response) => {
        setImagens(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const adicionarImagem = (novaImagem) => {
    setImagens([...imagens, novaImagem]);
  };

  return (
    <Carousel fade>
      {imagens.map((imagem, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src={imagem.img}
            alt={imagem.alt}
          />
          {imagem.caption && (
            <Carousel.Caption className="caption">
              <h3>{imagem.caption.title}</h3>
              <p>{imagem.caption.text}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarrosselEdit;

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const CarrosselEdit = ({ updateCarrossel }) => {
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

  return (
    <Carousel fade>
      {imagens.map((imagem, index) => {
        if (imagem.caption_add && imagem.caption_add !== '0') {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-img"
                src={imagem.img}
                alt={imagem.alt}
              />
              <Carousel.Caption className="caption">
                <h3>{imagem.caption_title}</h3>
                <p>{imagem.caption_text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        } else {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-img"
                src={imagem.img}
                alt={imagem.alt}
              />
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
  );
};


export default CarrosselEdit;

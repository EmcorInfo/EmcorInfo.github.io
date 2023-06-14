import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import "./carousel.css"

const CarrosselEdit = ({ updateCarrossel }) => {
  const [imagens, setImagens] = useState([]);
  // const [idade, setIdade] = useState(0);

  // const getAnosFundacao = () => {
  //   const anoFundacao = 1989;
  //   const data = new Date();
  //   const ano = data.getFullYear();
  //   return ano - anoFundacao;
  // };

  // useEffect(() => {
  //   setIdade(getAnosFundacao());
  // }, []);

  useEffect(() => {
    const buscarImagens = async () => {
      try {
        const response = await axios.get("https://hospitalemcor.com.br/api/index.php?table=carrossel");
        setImagens(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    buscarImagens();
  }, [updateCarrossel]);

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

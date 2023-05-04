import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import frente3 from "../../images/frente3.JPG";
import mulher from "../../images/mulher.jpg";
import emprev from "../../images/emprevcarosel.png";
import "./carousel.css";

export default function CarouselManagement() {
  useEffect(() => {
    const anoFundacao = '1989'
    var data = new Date();
    var ano = data.getFullYear();
    var result = (ano) - (anoFundacao);

    document.getElementById("idade").innerHTML = (result)
  });

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mulher}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={emprev}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={frente3}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>Mais que um Hospital, um novo conceito.</h3>
          <p>Há <span id='idade' /> anos cuidando do coração da baixada.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

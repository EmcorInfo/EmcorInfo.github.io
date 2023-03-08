import Carousel from 'react-bootstrap/Carousel';
import frente3 from "../../images/frente3.JPG";
import mulher from "../../images/mulher.jpg"
import mulherdia from "../../images/mulherdia.jpg"
// import conforto2 from "../../images/conforto2.JPG";
// import tecnologia2 from "../../images/tecnologia2.JPG";
import emprev from "../../images/emprevcarosel.png";
import "./carousel.css"
import { useEffect } from 'react';

export default function CarouselFade() {

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
          className="d-block w-100 carousel-img-emprev"
          src={mulherdia}
          alt="First slide"
        />
        {/* <Carousel.Caption className="caption">
          <h3>Novas especializações.</h3>
          <p>Novas especialidades em atendimento ambulatorial no hospital.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mulher}
          alt="First slide"
        />
        {/* <Carousel.Caption className="caption">
          <h3>Novas especializações.</h3>
          <p>Novas especialidades em atendimento ambulatorial no hospital.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src= {emprev}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Atendimento Ambulatorial</h3>
          <p>EMCOR Medicina preventiva.</p>
        </Carousel.Caption> */}
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
      {/* <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src= {conforto2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Conforto</h3>
          <p>Conforto do paciente em primeiro lugar.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
           
          src={tecnologia2}
          alt=" slide"
        />

        <Carousel.Caption>
          <h3>Tecnologia</h3>
          <p>Buscando Sempre a melhor Tecnologia.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

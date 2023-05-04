import Carousel from 'react-bootstrap/Carousel';
import frente3 from "../../images/frente3.JPG";
import mulher from "../../images/mulher.jpg"
import emprev from "../../images/emprevcarosel.png";
import "./carousel.css"
import { useState, useEffect } from 'react';

export default function CarouselFade() {
    const [idade, setIdade] = useState(0);

    const getAnosFundacao = () => {
        const anoFundacao = 1989;
        const data = new Date();
        const ano = data.getFullYear();
        return ano - anoFundacao;
    }

    useEffect(() => {
        setIdade(getAnosFundacao());
    }, []);

    const items = [
        {
            img: mulher,
            alt: "First slide"
        },
        {
            img: emprev,
            alt: "Second slide"
        },
        {
            img: frente3,
            alt: "Third slide",
            caption: {
                title: "Mais que um Hospital, um novo conceito.",
                text: `Há ${idade} anos cuidando do coração da baixada.`
            }
        },
    ];

    return (
        <Carousel fade>
            {items.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-img"
                        src={item.img}
                        alt={item.alt}
                    />
                    {item.caption && (
                        <Carousel.Caption className="caption">
                            <h3>{item.caption.title}</h3>
                            <p>{item.caption.text}</p>
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

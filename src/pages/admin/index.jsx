import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import SideMenu from '../../components/sidebar';
import FormularioCarrossel from '../../components/Manager/CarouselManager';
import CarrosselEdit from '../../components/CarrosselEditavel';
import CarouselList from '../../components/Manager/CarouselList';

export default function Adm() {
  // const [showFormulario, setShowFormulario] = useState(true);
  const [updateCarrossel, setUpdateCarrossel] = useState(false);

  const adicionarImagem = (novaImagem) => {
    // setShowFormulario(false); // Esconde o formulário após adicionar uma imagem
    setUpdateCarrossel(true);
  };
  const handleImageDeleted = () => {
    setUpdateCarrossel(true);

  };
  // const abrirbotao = () => {
  //   setShowFormulario(!showFormulario);
  // };

  return (
    <>
      <SideMenu />
      <Container className='d-flex justify-content-center flex-column me-0 my-5 border' style={{marginLeft: 140}}>
        <FormularioCarrossel adicionarImagem={adicionarImagem}/>
        <CarouselList updateCarrossel={updateCarrossel} onImageDeleted = {handleImageDeleted} />
          <Container className='mb-3 d-flex justify-content-center flex-column border border-dark rounded'>
          <h2 className='text-center'>Exemplo</h2>
          <CarrosselEdit updateCarrossel={updateCarrossel} />
          </Container>
        {/* <Button onClick={abrirbotao}>Abrir</Button> */}
      </Container>
    </>
  );
}

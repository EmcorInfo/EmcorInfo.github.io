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
      <Container className='me-0 mb-5' style={{marginLeft: 130}}>
        <FormularioCarrossel adicionarImagem={adicionarImagem}/>
        <CarouselList updateCarrossel={updateCarrossel} onImageDeleted = {handleImageDeleted} />
        <CarrosselEdit updateCarrossel={updateCarrossel} />

        {/* <Button onClick={abrirbotao}>Abrir</Button> */}
      </Container>
    </>
  );
}

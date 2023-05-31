import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import SideMenu from '../../components/sidebar';
import FormularioCarrossel from '../../components/Manager/CarouselManager';
import CarrosselEdit from '../../components/CarrosselEditavel';

export default function Adm() {
  const [showFormulario, setShowFormulario] = useState(true);
  const [showCarrossel, setShowCarrossel] = useState(false);

  const adicionarImagem = (novaImagem) => {
    setShowCarrossel(true);
    setShowFormulario(false); // Esconde o formulário após adicionar uma imagem
  };
  const abrirbotao = () => {
    setShowFormulario(!showFormulario);
    setShowCarrossel(!showCarrossel);
  }

  return (
  <>
    <SideMenu/>
    <Container className='me-0'>
      {showFormulario && <FormularioCarrossel adicionarImagem={adicionarImagem} />}
      {showCarrossel && <CarrosselEdit />}
      <Button onClick={abrirbotao}>Abrir</Button>
    </Container>
  </>
  )
}

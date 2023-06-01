import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./style.css";
import axios from 'axios';

const FormularioCarrossel = ({ adicionarImagem  }) => {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [captionAdd, setCaptionAdd] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        setMensagem('');
        setTipoMensagem('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const novaImagem = {
      img: src,
      alt: alt,
      caption: {
        title: titulo,
        text: descricao,
        add: captionAdd,
      },
    };

    axios
      .post('http://localhost:3001/api/inserir-imagem', novaImagem)
      .then((response) => {
        setSrc('');
        setAlt('');
        setTitulo('');
        setDescricao('');
        setCaptionAdd(false);
        setMensagem(response.data.message);
        setTipoMensagem('success');
        adicionarImagem(novaImagem);
      })
      .catch((error) => {
        if (error.response) {
          // Erro de resposta HTTP com status diferente de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          setMensagem('Houve um erro ao adicionar a imagem. (Erro de resposta HTTP)');
        } else if (error.request) {
          // Erro de solicitação sem resposta
          console.error(error.request);
          setMensagem('Houve um erro ao adicionar a imagem. (Erro de solicitação)');
        } else {
          // Erro de configuração da requisição
          console.error('Erro', error.message);
          setMensagem('Houve um erro ao adicionar a imagem. (Erro de configuração)');
        }
        setTipoMensagem('danger');
      });
  };


  return (
    <Form className='formulario-carrossel' onSubmit={handleSubmit}>
      <h2 className='d-flex justify-content-center'>Adicionar nova imagem</h2>
      {mensagem && <Alert variant={tipoMensagem}>{mensagem}</Alert>}

      <Form.Group controlId="formSrc">
        <Form.Label>URL da imagem</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a URL da imagem"
          value={src}
          onChange={(event) => setSrc(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAlt">
        <Form.Label>Texto alternativo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o texto alternativo"
          value={alt}
          onChange={(event) => setAlt(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCaptionAdd">
        <Form.Label>Terá Capitulação?</Form.Label>
        <Form.Check
          type="switch"
          id="switchCaptionAdd"
          label={captionAdd ? 'Sim' : 'Não'}
          checked={captionAdd}
          onChange={(event) => setCaptionAdd(event.target.checked)}
        />
      </Form.Group>

      <Form.Group controlId="formTitulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescricao">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Adicionar imagem
      </Button>
    </Form>
  );
};

export default FormularioCarrossel;

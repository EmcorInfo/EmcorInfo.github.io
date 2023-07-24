import React, { useEffect, useState } from 'react'
import "./style.css"
import { Alert, Button, Form,  } from 'react-bootstrap'
import axios from 'axios';

function AddItem() {
const [nome, setNome] = useState('');
const [quantidade, setQuantidade] = useState('');
const [tipo, setTipo] = useState('');
const [crit, setCrit] = useState('');
const [tiposList, setTiposList] = useState([]); // State variable to store the list of types
const [mensagem, setMensagem] = useState('');
const [tipoMensagem, setTipoMensagem] = useState('');

useEffect(() => {
  fetchTiposList(); // Fetch the list of types when the component mounts
}, []);

const fetchTiposList = async () => {
  try {
    const response = await axios.get('http://hospitalemcor.com.br/api/index.php?table=tipoitems');
    setTiposList(response.data); // Store the list of types in the state variable
  } catch (error) {
    console.error('Error fetching types:', error);
  }
};

useEffect(() => {
  if (mensagem) {
    const timer = setTimeout(() => {
      setMensagem('');
      setTipoMensagem('');
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [mensagem]);

const handleQuantidadeChange = (event) => {
  // Verifica se o valor é menor que zero
  const newQuantidade = event.target.value < 0 ? 0 : event.target.value;
  setQuantidade(newQuantidade);
};
const handleCritChange = (event) => {
  // Verifica se o valor é menor que zero
  const newCrit = event.target.value < 0 ? 0 : event.target.value;
  setCrit(newCrit);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const novoItem = {
    nome: nome,
    quantidade: quantidade,
    tipo: tipo,
    crit: crit,
  };

  try {
    console.log(novoItem);
    const response = await axios.post('http://hospitalemcor.com.br/api/index.php?table=items', novoItem);     
    console.log(response.data);
    setNome('');
    setQuantidade('');
    setTipo('');
    setCrit('');
    setMensagem(response.data.message);
    setTipoMensagem('success');
    // adicionarItems(novoItem); Serve para atualizar a lista de itens
  } catch (error) {
    console.error(error);
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
  }
};

  return (
    <Form className="formularioItemsapp" onSubmit={handleSubmit}>
      <h2 className="addItemApp d-flex justify-content-center text-white">Adicionar Items</h2>
      {mensagem && <Alert variant={tipoMensagem}>{mensagem}</Alert>}
      <Form.Group id='AppItemNome'>
        <Form.Label className='text-white'>Nome do Item</Form.Label>
        <Form.Control 
          type='text' 
          placeholder='Digite um nome para o item' 
          value={nome} 
          onChange={(event)=> setNome(event.target.value)} 
          required
          />
      </Form.Group>
      <Form.Group id='AppItemQuantidade'>
        <Form.Label className='text-white'>Quantidade Inicial</Form.Label>
        <Form.Control 
          type='number' 
          placeholder='0' 
          value={quantidade} 
          onChange={handleQuantidadeChange} 
          required
          />
      </Form.Group>
      <Form.Group id='AppItemCrit'>
        <Form.Label className='text-white'>Quantidade Critica</Form.Label>
        <Form.Control 
          type='number' 
          placeholder='0' 
          value={crit} 
          onChange={handleCritChange} 
          required
          />
      </Form.Group>
      <Form.Group id='AppItemTipo'>
        <Form.Label className='text-white'>Tipo</Form.Label>
        <Form.Select 
          className="custom-select"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
          required
        >
          <option value="">Selecione o Tipo</option>
          {tiposList.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button className='my-3' variant="success" type="submit">
        Adicionar item
      </Button>
    </Form>
  )
}

export default AddItem

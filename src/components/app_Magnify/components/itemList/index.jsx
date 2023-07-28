import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, InputGroup, ListGroup, ListGroupItem, Modal, ProgressBar } from 'react-bootstrap';
import "./style.css";
import { BsSearch } from 'react-icons/bs'; // Importe o ícone de lupa do pacote react-icons


function ItemsList() {
  const [items, setItems] = useState([]);
  const [tiposItems, setTiposItems] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState('0');
  const [undsList, setUndList] = useState([]);
  const [depsList, setDepsList] = useState([]);
  const [ordenacao, setOrdenacao] = useState('nomeAsc'); // Estado para controlar a forma de ordenação
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEntrModal, setShowEntrModal] = useState(false);
  const [showSaidaModal, setShowSaidaModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o valor da caixa de pesquisa
  const [showDeletedAlert, setShowDeletedAlert] = useState(false); // Estado para controlar a exibição do alerta de item deletado
  const [showModAlert, setShowModAlert] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');
  const [entradaQuantidade, setEntradaQuantidade] = useState(0);
  const [saidaQuantidade, setSaidaQuantidade] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDepartament, setSelectedDepartament] = useState('');


  useEffect(() => {
    buscarItems();
    fetchUndList();
    fetchDepsList();
    buscarTiposItems(); // eslint-disable-next-line
  }, [filtroTipo]);


  const fetchUndList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=unidades');
      setUndList(response.data);
    } catch (error) {
      console.error('Error fetching units:', error);
    }
  };

  const fetchDepsList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=departamentos');
      setDepsList(response.data);
    } catch (error) {
      console.error('Error fetching Deps:', error);
    }
  };
  
  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  const buscarItems = async () => {
    try {
      const response = await axios.get("https://hospitalemcor.com.br/api/index.php?table=items");
      if (filtroTipo === '0') {
        setItems(response.data);
      } else {
        setItems(response.data.filter((item) => item.tipo === parseInt(filtroTipo)));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const buscarTiposItems = async () => {
    try {
      const response = await axios.get("https://hospitalemcor.com.br/api/index.php?table=tipoitems");
      setTiposItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMaximo = (quantidade) => {
    if (quantidade >= 0 && quantidade <= 10) {
      return 10;
    } else if (quantidade >= 11 && quantidade <= 100) {
      return 100;
    } else if (quantidade >= 101 && quantidade <= 1000) {
      return 1000;
    } else {
      return 10000;
    }
  };

  const getTipo = (tipo) => {
    if (tipo === 1) {
      return "Escritório";
    } else if (tipo === 2) {
      return "Formulário";
    } else {
      return "Desconhecido";
    }
  };

  const getUndAbrev = (undId) => {
    const unidadeEncontrada = undsList.find((und) => und.id === undId);
    return unidadeEncontrada ? unidadeEncontrada.abrev : 'Desconhecida';
  };

  const getVariant = (quantidade, crit) => {
    if (quantidade <= crit) {
      return "danger";
    } else {
      return "primary";
    }
  };

  const handleFiltroTipoChange = (event) => {
    setFiltroTipo(event.target.value);
  };

  // Função para ordenar os itens por nome em ordem alfabética (A-Z)
  const ordenarPorNomeAsc = () => {
    setItems([...items].sort((a, b) => a.nome.localeCompare(b.nome)));
    setOrdenacao('nomeAsc');
  };

  // Função para ordenar os itens por nome em ordem alfabética inversa (Z-A)
  const ordenarPorNomeDesc = () => {
    setItems([...items].sort((a, b) => b.nome.localeCompare(a.nome)));
    setOrdenacao('nomeDesc');
  };

  // Função para ordenar os itens por quantidade (maior para menor)
  const ordenarPorQuantidadeMaior = () => {
    setItems([...items].sort((a, b) => b.quantidade - a.quantidade));
    setOrdenacao('quantidadeMaior');
  };

  // Função para ordenar os itens por quantidade (menor para maior)
  const ordenarPorQuantidadeMenor = () => {
    setItems([...items].sort((a, b) => a.quantidade - b.quantidade));
    setOrdenacao('quantidadeMenor');
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  

  const handleDeleteItem = () => {
    // Exibe a caixa de diálogo de confirmação
    const shouldDelete = window.confirm('Tem certeza que deseja excluir este item?');

    if (shouldDelete) {
      // Faça a chamada para excluir o item na API (usando axios ou a biblioteca que preferir)
      axios.delete(`https://hospitalemcor.com.br/api/index.php?table=items&id=${selectedItem.id}`)
        .then(() => {
          buscarItems();
          setShowModal(false);
          setShowDeletedAlert(true);
          setTimeout(() => {
            setShowDeletedAlert(false);
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });

      // Após a exclusão, você pode atualizar a lista de itens ou realizar a ação necessária.
      // Neste exemplo, estou apenas fechando a modal.
      setShowModal(false);
    }
  };
  
  const handleEditItem = () => {
    const shouldMod = window.confirm('Tem certeza que deseja modificar este item?');

    if (shouldMod) {
      const updatedItem = { ...selectedItem, und: selectedUnit, tipo: selectedTipo };

      axios
        .put(`https://hospitalemcor.com.br/api/index.php?table=items&id=${selectedItem.id}`, updatedItem)
        .then(() => {
          buscarItems();
          setShowEditModal(false);
          setShowModal(false);
          setShowModAlert(true);
          setTimeout(() => {
            setShowModAlert(false);
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  // Função para calcular a nova quantidade após a entrada de item e realizar a entrada
  const handleEntradaItem = () => {
    const shouldEntrada = window.confirm('Tem certeza que deseja dar entrada nesta quantidade?');
  
    if (shouldEntrada) {
      const novaQuantidade = selectedItem.quantidade + entradaQuantidade;
  
      // Objeto com os dados da entrada a serem inseridos na tabela "entradas"
      const novaEntrada = {
        item_id: selectedItem.id,
        quantidade: entradaQuantidade,
        data_entrada: selectedDate,
      };
  
      // Faz a chamada para atualizar o item na tabela "items"
      axios
        .put(`https://hospitalemcor.com.br/api/index.php?table=items&id=${selectedItem.id}`, {
          ...selectedItem,
          quantidade: novaQuantidade,
        })
        .then(() => {
          // Após a atualização do item na tabela "items", faz a chamada para inserir a entrada na tabela "entradas"
          axios.post('https://hospitalemcor.com.br/api/index.php?table=entradas', novaEntrada)
            .then(() => {
              buscarItems();
              setEntradaQuantidade(0);
              setSelectedDate(null);
              setShowModal(false);
              setShowEntrModal(false);
              setShowModAlert(true);
              setTimeout(() => {
                setShowModAlert(false);
              }, 3000);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleSaidaItem = () => {
    const shouldSaida = window.confirm('Tem certeza que deseja dar Saída nesta quantidade?');
  
    if (shouldSaida) {
      const novaQuantidade = selectedItem.quantidade - saidaQuantidade;
  
      // Objeto com os dados da saída a serem inseridos na tabela "saidaitems"
      const novaSaida = {
        item_id: selectedItem.id,
        quantidade: saidaQuantidade,
        data_saida: selectedDate,
        departamento_id: selectedDepartament, // Adicione o id do departamento selecionado
      };
  
      // Faz a chamada para atualizar o item na tabela "items"
      axios
        .put(`https://hospitalemcor.com.br/api/index.php?table=items&id=${selectedItem.id}`, {
          ...selectedItem,
          quantidade: novaQuantidade,
        })
        .then(() => {
          // Após a atualização do item na tabela "items", faz a chamada para inserir a saída na tabela "saidaitems"
          axios.post('https://hospitalemcor.com.br/api/index.php?table=saidaitems', novaSaida)
            .then(() => {
              buscarItems();
              setShowSaidaModal(false);
              setSaidaQuantidade(0);
              setSelectedDate(null);
              setSelectedDepartament('');
              setShowModal(false);
              setShowModAlert(true);
              setTimeout(() => {
                setShowModAlert(false);
              }, 3000);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const cancelSaida = () =>{
  setShowSaidaModal(false);
  setSelectedDepartament('');
  setSaidaQuantidade(0);
  setSelectedDate();
};
const cancelEntr = () =>{
  setShowEntrModal(false);
  setEntradaQuantidade(0);
  setSelectedDate();
};

  // Filtra os itens com base no valor da caixa de pesquisa (ignorando maiúsculas e minúsculas)
  const filteredItems = items.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
       {/* Alerta de item deletado */}
      <Alert variant="danger" show={showDeletedAlert} onClose={() => setShowDeletedAlert(false)} dismissible>
        Item deletado com sucesso!
      </Alert>
      {/* Alerta de item Modificado */}
      <Alert variant="primary" show={showModAlert} onClose={() => setShowModAlert(false)} dismissible>
        Item Modificado com sucesso!
      </Alert>
      <Form className="formappitemsfilters d-flex my-2">
        <Form.Group>
          <Form.Label className="text-white">Ordenar por:</Form.Label>
          <Form.Select
            value={ordenacao}
            onChange={(event) => {
              const value = event.target.value;
              if (value === 'nomeAsc') {
                ordenarPorNomeAsc();
              } else if (value === 'nomeDesc') {
                ordenarPorNomeDesc();
              } else if (value === 'quantidadeMaior') {
                ordenarPorQuantidadeMaior();
              } else if (value === 'quantidadeMenor') {
                ordenarPorQuantidadeMenor();
              }
            }}
            className="tipoitemseletor"
          >
            <option value="nomeAsc">Nome (A-Z)</option>
            <option value="nomeDesc">Nome (Z-A)</option>
            <option value="quantidadeMaior">Quantidade (Maior para Menor)</option>
            <option value="quantidadeMenor">Quantidade (Menor para Maior)</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
        <div className="position-relative w-auto searchboxitems rounded">
          <InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Digite para pesquisar..."
              className="form-control-transparent"
              value={searchTerm}
              onKeyPress={handleSearchKeyPress}
              onChange={(event) => setSearchTerm(event.target.value)} // Atualiza o estado com o valor digitado na caixa de pesquisa
            />
            <BsSearch />
          </InputGroup.Text>
        </div>
      </Form.Group>
        <Form.Group>
          <Form.Label className="text-white">Filtrar por Tipo:</Form.Label>
          <Form.Select
            value={filtroTipo}
            onChange={handleFiltroTipoChange}
            className="tipoitemseletor" // Adicione a classe custom-select para aplicar o ícone
          >
            <option value="0">Sem filtro</option>
            {tiposItems.map((tipoItem) => (
              <option key={tipoItem.id} value={tipoItem.id}>
                {tipoItem.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <ListGroup className="d-flex flex-column">
         {filteredItems.map((item, id) => (
          <ListGroupItem className="my-1 listitemsgroup p-0" key={id}>  
            <button className="itemslistitems p-2 d-flex align-items-center" onClick={() => handleItemClick(item)}>
              <p className='text-white itemnome'>{item.nome}</p>
              <ProgressBar max={getMaximo(item.quantidade)} now={item.quantidade} label={item.quantidade} className="ms-3 my-progress-bar">
                <ProgressBar striped animated variant={getVariant(item.quantidade, item.crit)} now={(item.quantidade / getMaximo(item.quantidade)) * 100} label={`${item.quantidade} / ${getMaximo(item.quantidade)}`} />
              </ProgressBar>
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* Modal de Visualização do Item */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w text-white"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {selectedItem.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          <p>Quantidade: {selectedItem.quantidade}</p>
          <p>Tipo: {getTipo(selectedItem.tipo)}</p>
          <p>Unidade: {getUndAbrev(selectedItem.und)}</p>
          <div className="mt-5 buttongroup d-flex justify-content-between"> 
            <Button onClick={() => setShowEditModal(true)}>Editar</Button>
            <Button variant="success" onClick={() => setShowEntrModal(true)}>Entrada</Button>
            <Button variant="warning" onClick={() => setShowSaidaModal(true)}>Saída</Button>
            <Button variant="danger" onClick={handleDeleteItem}>Excluir</Button>
          </div>
        </Modal.Body>
      </Modal>
      {/*Fim da Modal de Visualização do Item */}

      {/* Modal de edição do Item */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        dialogClassName="modal-90w text-white"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Editar Item - {selectedItem.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          {/* Aqui você pode adicionar um formulário para a edição dos campos do item */}
          <Form.Group>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="string"
              value={selectedItem.nome}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  nome: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Unidade:</Form.Label>
            <Form.Select
              value={selectedUnit}
              onChange={(event) => setSelectedUnit(event.target.value)}
            >
              <option value="">Selecione uma unidade</option>
              {undsList.map((und) => (
                <option key={und.id} value={und.id}>
                  {und.unidade}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo:</Form.Label>
              <Form.Select
                value={selectedTipo}
                onChange={(event) => setSelectedTipo(event.target.value)}
              >
                <option value="">Selecione um tipo</option>
                {tiposItems.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          <Form.Group>
            <Form.Label>Quantidade Critica:</Form.Label>
            <Form.Control
              type="number"
              value={selectedItem.crit}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem,
                  crit: e.target.value,
                })
              }
            />
          </Form.Group>
          {/* Adicione outros campos que deseja permitir a edição */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditItem}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
{/*Fim da Modal de edição do Item */}

{/*Inicio da Modal Entrada de Item */}
{/* Modal de entrada de item */}
<Modal
        show={showEntrModal}
        onHide={cancelEntr}
        dialogClassName="modal-90w text-white"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Entrada de Item - {selectedItem.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          <p>Quantidade atual: {selectedItem.quantidade}</p>
          <p>
            Quantidade de entrada:{' '}
            <input
              type="number"
              value={entradaQuantidade}
              onChange={(e) => setEntradaQuantidade(parseInt(e.target.value))}
              min="0"
            />
          </p>
           {/* Data Picker aqui */}
           <Form.Group className="my-3 dataPickerControl">
            <Form.Label className="me-1">Data de Entrada:</Form.Label>
             <Form.Control
                className="dataPicker"
                type="date"
                name="duedate"
                placeholder="Due date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            
          </Form.Group>
          {/* Data Picker aqui */}
          <p>Nova quantidade: {selectedItem.quantidade + entradaQuantidade}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelEntr}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEntradaItem}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
{/*Fim da Modal de entrada do Item */}
{/* Modal de Saída de item */}
<Modal
        show={showSaidaModal}
        onHide={cancelSaida}
        dialogClassName="modal-90w text-white"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Saída de Item - {selectedItem.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          <p className="my-2">Quantidade atual: {selectedItem.quantidade}</p>
          <p className="my-2">
            Quantidade de Saída:{' '}
            <input
              type="number"
              value={saidaQuantidade}
              onChange={(e) => setSaidaQuantidade(parseInt(e.target.value))}
              min="0"
            />
          </p>
          <Form.Group className="d-flex flex-row align-items-center">
    <Form.Label className="my-2 me-2">Departamento: </Form.Label>
    <Form.Select
      value={selectedDepartament}
      onChange={(event) => setSelectedDepartament(event.target.value)}
    >
      <option value="">Selecione um departamento</option>
      {depsList.map((dep) => (
        <option key={dep.id} value={dep.id}>
          {dep.nome}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
         {/* Data Picker aqui */}
         <Form.Group className="my-3 dataPickerControl">
            <Form.Label className="me-3">Data de Saída:</Form.Label>
             <Form.Control
                className="dataPicker"
                type="date"
                name="duedate"
                placeholder="Due date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
          </Form.Group>
          {/* Data Picker aqui */}
          <p className="my-2">Nova quantidade: {selectedItem.quantidade - saidaQuantidade}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelSaida}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaidaItem}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
{/*Fim da Modal de saída do Item */}
     
    </>
  );
}

export default ItemsList;

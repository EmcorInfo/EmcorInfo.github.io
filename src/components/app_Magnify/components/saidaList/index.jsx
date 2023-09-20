import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"

function EntrList() {
  const [saidas, setsaidas] = useState([]);
  const [items, setItems] = useState([]);
  const [deps , setDeps] =useState ([]);
  // eslint-disable-next-line
  const [ordenacao, setOrdenacao] = useState('dataEntradaRecente');


  // Função para buscar saídas, itens e departamentos
const fetchData = () => {
  buscarsaidas();
  fetchItemsList();
  fetchDepList();
  setOrdenacao('dataEntradaRecente');
};

useEffect(() => {
  fetchData(); // eslint-disable-next-line
}, []);

const handleRefresh = () => {
  fetchData();
};

  // useEffect(() => {
  //   buscarsaidas();
  //   fetchItemsList();
  //   fetchDepList();
  //   setOrdenacao('dataEntradaRecente')
  // }, []);

  // const handleRefresh = () =>{
  //   buscarsaidas();
  //   fetchItemsList();
  //   fetchDepList();
  //   setOrdenacao('dataEntradaRecente')
  // };

  const buscarsaidas = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=saidaitems');
      setsaidas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItemsList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching Items:', error);
    }
  };
  const fetchDepList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=departamentos');
      setDeps(response.data);
    } catch (error) {
      console.error('Error fetching Deps:', error);
    }
  };

  const getNomeItem = (itemId) => {
    const nomeEncontrado = items.find((item) => item.id === itemId);
    return nomeEncontrado ? nomeEncontrado.nome : 'Desconhecida';
  };
  const getDep = (depId) => {
    const depEncontrado = deps.find((dep) => dep.id === depId);
    return depEncontrado ? depEncontrado.nome : 'Desconhecida';
  };
  const formatarData = (data) => {
    const dataPartes = data.split('-');
    if (dataPartes.length !== 3) {
      return data;
    }
    const [ano, mes, dia] = dataPartes;
    return `${dia}/${mes}/${ano}`;
  };
  

  // Função para ordenar as saidas por nome em ordem alfabética (A-Z)
  const ordenarPorNomeAsc = () => {
    setsaidas([...saidas].sort((a, b) => getNomeItem(a.item_id).localeCompare(getNomeItem(b.item_id))));
    setOrdenacao('nomeAsc');
  };

  // Função para ordenar as saidas por nome em ordem alfabética inversa (Z-A)
  const ordenarPorNomeDesc = () => {
    setsaidas([...saidas].sort((a, b) => getNomeItem(b.item_id).localeCompare(getNomeItem(a.item_id))));
    setOrdenacao('nomeDesc');
  };

  // Função para ordenar as saidas por data de saida (mais recente para mais antiga)
  const ordenarPorDatasaidaRecente = () => {
    setsaidas([...saidas].sort((a, b) => new Date(b.data_saida) - new Date(a.data_saida)));
    setOrdenacao('datasaidaRecente');
  };

  // Função para ordenar as saidas por data de saida (mais antiga para mais recente)
  const ordenarPorDatasaidaAntiga = () => {
    setsaidas([...saidas].sort((a, b) => new Date(a.data_saida) - new Date(b.data_saida)));
    setOrdenacao('datasaidaAntiga');
  };

  return (
    <div className='text-white d-flex flex-column align-items-center fundolistaentr'>
      <div className='d-flex flex-row align-items-center justify-content-center'>
        <h1 className='text-center'>Lista de Saídas</h1>
        <i className="fa fa-refresh ms-5" aria-hidden="true" onClick={handleRefresh}></i>
      </div>
      <div className='d-flex justify-content-center my-3'>
        <button onClick={ordenarPorNomeAsc}>Nome (A-Z)</button>
        <button onClick={ordenarPorNomeDesc}>Nome (Z-A)</button>
        <button onClick={ordenarPorDatasaidaRecente}>saida (Recente)</button>
        <button onClick={ordenarPorDatasaidaAntiga}>saida (Antiga)</button>
      </div>
      <ul className='listaCom'>
        <li className='lista d-flex flex-row my-2 justify-content-between bg-dark'>
            <p className=''>Nome:</p>
            |
            <p className=''>Quantidade:</p>
            |
            <p className="">Departamento:</p>
            |
            <p className='me-2'>Data da Saída:</p>

        </li>
        {saidas.map((saida) => (
          <li className='lista d-flex flex-row my-2 justify-content-between bg-dark' key={saida.id}>
            <p className=''>{getNomeItem(saida.item_id)}</p>
            |
            <p className=''>{saida.quantidade}</p>
            |
            <p className="">{getDep(saida.departamento_id)}</p>
            |
            <p className='me-2'>{formatarData(saida.data_saida)}</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntrList;

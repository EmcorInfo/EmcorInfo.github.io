import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"

function EntrList() {
  const [entradas, setEntradas] = useState([]);
  const [items, setItems] = useState([]); 
  // eslint-disable-next-line
  const [ordenacao, setOrdenacao] = useState('dataEntradaRecente');

  useEffect(() => {
    buscarEntradas();
    fetchItemsList();
    setOrdenacao('dataEntradaRecente');
  }, []);

  const handleRefresh = () =>{
    buscarEntradas();
    fetchItemsList();
    setOrdenacao('dataEntradaRecente');
  };

  const buscarEntradas = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=entradas');
      setEntradas(response.data);
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

  const getNomeItem = (itemId) => {
    const nomeEncontrado = items.find((item) => item.id === itemId);
    return nomeEncontrado ? nomeEncontrado.nome : 'Desconhecida';
  };

  const formatarData = (data) => {
    const dataPartes = data.split('-');
    if (dataPartes.length !== 3) {
      return data;
    }
    const [ano, mes, dia] = dataPartes;
    return `${dia}/${mes}/${ano}`;
  };
  

  // Função para ordenar as entradas por nome em ordem alfabética (A-Z)
  const ordenarPorNomeAsc = () => {
    setEntradas([...entradas].sort((a, b) => getNomeItem(a.item_id).localeCompare(getNomeItem(b.item_id))));
    setOrdenacao('nomeAsc');
  };

  // Função para ordenar as entradas por nome em ordem alfabética inversa (Z-A)
  const ordenarPorNomeDesc = () => {
    setEntradas([...entradas].sort((a, b) => getNomeItem(b.item_id).localeCompare(getNomeItem(a.item_id))));
    setOrdenacao('nomeDesc');
  };

  // Função para ordenar as entradas por data de entrada (mais recente para mais antiga)
  const ordenarPorDataEntradaRecente = () => {
    setEntradas([...entradas].sort((a, b) => new Date(b.data_entrada) - new Date(a.data_entrada)));
    setOrdenacao('dataEntradaRecente');
  };

  // Função para ordenar as entradas por data de entrada (mais antiga para mais recente)
  const ordenarPorDataEntradaAntiga = () => {
    setEntradas([...entradas].sort((a, b) => new Date(a.data_entrada) - new Date(b.data_entrada)));
    setOrdenacao('dataEntradaAntiga');
  };

  return (
    <div className='text-white d-flex flex-column align-items-center fundolistaentr'>
      <div className='d-flex flex-row align-items-center justify-content-center'>
        <h1 className='text-center'>Lista de Entradas</h1>
        <i className="fa fa-refresh ms-5" aria-hidden="true" onClick={handleRefresh}></i>
      </div>
       

      <div className='d-flex justify-content-center my-3'>
        <button onClick={ordenarPorNomeAsc}>Nome (A-Z)</button>
        <button onClick={ordenarPorNomeDesc}>Nome (Z-A)</button>
        <button onClick={ordenarPorDataEntradaRecente}>Entrada (Recente)</button>
        <button onClick={ordenarPorDataEntradaAntiga}>Entrada (Antiga)</button>
      </div>
      <ul className='listaCom'>
      <li className='lista d-flex flex-row my-2 justify-content-between bg-dark'>
            <p className=''>Nome:</p>
            |
            <p className=''>Quantidade:</p>
            |
            <p className='me-2'>Data da Entrada:</p>

        </li>
        {entradas.map((entrada) => (
          <li className='lista d-flex flex-row my-2 justify-content-between bg-dark' key={entrada.id}>
            <p className=''>{getNomeItem(entrada.item_id)}</p>
            |
            <p className=''>{entrada.quantidade}</p>
            |
            <p className='me-2'>{formatarData(entrada.data_entrada)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntrList;

import React, { useEffect } from 'react';
import axios from 'axios';

const ApiRoute = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api' + window.location.pathname);
        // Trate os dados da API aqui
      } catch (error) {
        // Trate erros de solicitação
      }
    };

    fetchData();
  }, []);

  return <div>Carregando...</div>;
};

export default ApiRoute;

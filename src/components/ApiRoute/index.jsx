import React, { useEffect } from 'react';
import axios from 'axios';

const ApiRoute = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hospitalemcor.com.br/api" + window.location.pathname);
        <p>{response}</p>
      } catch (error) {
        // Trate erros de solicitação
      }
    };

    fetchData();
  }, []);

  return <div>Carregando...</div>;
};

export default ApiRoute;

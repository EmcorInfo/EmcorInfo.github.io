import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import "./style.css";

function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    buscarItems();
  }, []);

  const buscarItems = async () => {
    try {
      const response = await axios.get("http://hospitalemcor.com.br/api/index.php?table=items");
      setItems(response.data);
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
      return "Escritório"
    } else if (tipo === 2){
      return "Formulário"
    } else {
      return "Desconhecido"
    }
  };

  const getVariant = (quantidade) =>{
    if (quantidade < 3) {
      return "danger"
    } else {
      return "primary"; // Defina a cor desejada para a ProgressBar quando a quantidade não for menor que 3.
    }
  }

  return (
        <ListGroup className="d-flex flex-column">
          {items.map((item, id) => (
            <ListGroupItem className="my-1 listitemsgroup p-0" key={id}>
              <a className="p-2 d-flex align-items-center" href="/#">
                <p className='text-white itemnome'>{item.nome}</p>
                <p className='text-white text-center itemnome'>{getTipo(item.tipo)}</p>
                <ProgressBar max={getMaximo(item.quantidade)} now={item.quantidade} label={item.quantidade} className="ms-3 my-progress-bar">
                  <ProgressBar striped animated variant={getVariant(item.quantidade)} now={(item.quantidade / getMaximo(item.quantidade)) * 100} label={`${item.quantidade} / ${getMaximo(item.quantidade)}`} />
                </ProgressBar>
              </a>
            </ListGroupItem>
          ))}
        </ListGroup>
  );
}


export default ItemsList;

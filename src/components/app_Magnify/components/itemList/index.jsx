import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap'

function ItemsList() {
  const [items, setItems] = useState([]);
  const [maximo, setMaximo] = useState(0);

  

  const getMaximo = useCallback(() => {
    // Find the maximum value of "quantidade" from the items array
    let max = 0;
    items.forEach((item) => {
      if (item.quantidade > max) {
        max = item.quantidade;
      }
    });

    // Set the "maximo" state to the appropriate value
    if (max >= 0 && max <= 100) {
      return 100;
    } else if (max >= 101 && max <= 1000) {
      return 1000;
    } else {
      return 10000;
    }
  },[items]);  


  useEffect(() => {
    buscarItems();
    setMaximo(getMaximo());
  },[getMaximo]);
  
  const buscarItems = async () => {
    try {
      const response = await axios.get("http://hospitalemcor.com.br/api/index.php?table=items");
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <Container className="d-flex pt-1 flex-column border rounded border-dark" style={{ height: "90%", width: "90%", backgroundColor: "rgba(0 , 0, 100, 0.5)" }}>
      {items.map((item, id) => (
        <ListGroup style={{ width: "auto" }} key={id}>
          <ListGroupItem className="my-1 d-flex a">
            <p className='text-white'>{item.nome}</p>
            <ProgressBar max={maximo} now={item.quantidade} label={`${item.quantidade}`} className="ms-3 my-progress-bar" />
          </ListGroupItem>
        </ListGroup>
      ))}
    </Container>
  )
}

export default ItemsList;

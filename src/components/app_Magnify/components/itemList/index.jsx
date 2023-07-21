import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap'

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
  return (
    <Container className="d-flex pt-1 flex-column border rounded border-dark" style={ {height: "90%", width: "90%", backgroundColor: "rgba(0 , 0, 100, 0.5)" } }>
    {items.map((items , id)=> (
        <ListGroup style={{width: "auto"}} key={id}>
            <ListGroupItem className="my-1 d-flex a">
                <p className='text-white'>{items.nome}</p> <ProgressBar max={500} now={items.quantidade} label={`${items.quantidade}`} className="ms-3 my-progress-bar"
/>
            </ListGroupItem>
        </ListGroup>
    ))}
</Container>
  )
}

export default ItemsList

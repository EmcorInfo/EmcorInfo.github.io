import { Button, Container } from "react-bootstrap";
import "./style.css";


function Lista({ itens }) {
  return (
    <>
    <Container className="mt-2">
        <Container className="row">
          {itens.map((item) =>(
              <Container className="col-md-4 d-flex flex-column">
                <img className="servico-img" src={item.img} alt=''></img>
                <Button className="my-2">{item.name}</Button>
              </Container>))}
        </Container>
      </Container>
    </>
  )
}

export default Lista

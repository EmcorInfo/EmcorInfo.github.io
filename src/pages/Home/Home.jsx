import CarouselFade from "../../components/carrocel/Carrocel";
import Footer2 from "../../components/footer2/Footer2";
import Topbar from "../../components/topbar/Topbar";
import { Helmet } from 'react-helmet';
// import CarouselManagement from "../../components/Manager/CarouselManager";
// import { useState } from "react";
// import { Modal } from "react-bootstrap";
import "./style.css"


export default function Home() {
  // const [showModal, setShowModal] = useState(false);
  // function handleOpenModal() {
  //   setShowModal(true);
  // }
  
  return(
    <>
    <Helmet>
        <title>Início - Hospital EMCOR</title>
        <meta name="description" content="Conheça nossos serviços." />
    </Helmet>
    <Topbar />

    <CarouselFade/>
    <Footer2 />
    {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Gerenciar Carrossel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselManagement />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>Fechar</button>
        </Modal.Footer>
      </Modal>

      <button onClick={handleOpenModal}>Gerenciar Carrossel</button> */}
    </>
  );
}

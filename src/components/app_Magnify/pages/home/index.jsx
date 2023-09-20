import React, { useState } from 'react';
import "./style.css";
import {  Button, Container, Modal, Tab, Tabs } from 'react-bootstrap';
import ItemsList from '../../components/itemList';
import AddItem from '../../components/additem';
import logo from '../../image/SISTEMA MAGNIFY.ico';
import EntrList from '../../components/entrList';
import SaidaList from '../../components/saidaList';
import Dashboard from '../../components/dashboard';
import UserProfilePage from '../../components/userInfo';

function Homeapp() {

  const [exitModal , setExitModal] = useState(false)

  const handleExit = () =>{
    setExitModal()
  }

  const deslogarUser = (e) => {
    try {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.reload();
        
    } catch (error) {
        console.log(error)
        
    }
};

  return (<>
    <Container className="d-flex flex-column justify-content-center border rounded border-dark" style={{ height: "95%", width: "90%", backgroundColor: "rgba(0 , 0, 0, 0.85)" }}>
    <i
      className="exitbutton fa fa-times fa-3 m-1 mt-2 align-self-end"
      aria-hidden="true"
      onClick={()=> setExitModal(true)}
    >
    </i>
      <Container className="d-flex align-items-center justify-content-center m-3 text-white">
        <img className="me-3 logoapp" src={logo} alt="MAGNIFY" srcset="" />
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-end">
            <h2 className="m-0">MAGNIFY </h2>
            <span>webapp</span>
          </div>
          <span className="small m-0 p-0">web app para controle de estoque</span>
        </div>
      </Container>
        <Tabs className="abas mt-2" defaultActiveKey="tab0" id='tabs'>
        <Tab className="aba" eventKey="tab0" title="Dashboard"> 
              <div className="tab-content mt-3">
                <h2 className='text-center text-white'>DashBoard</h2>
                <Dashboard />
              </div>
          </Tab>
          <Tab className="aba" eventKey="tab1" title="Items"> 
              <div className="tab-content">
                <ItemsList />
              </div>
          </Tab>
          <Tab className="aba" eventKey="tab2" title="Entradas">
              <div className="tab-content additemstab mt-3">
                <EntrList />
              </div>
            </Tab> 
            <Tab className="aba" eventKey="tab3" title="Saídas">
              <div className="tab-content  mt-3">
                <SaidaList />
              </div>
            </Tab> 
            <Tab className="aba" eventKey="tab25" title="Adicionar Item">
              <div className="tab-content additemstab mt-3">
                <AddItem />
              </div>
            </Tab>
            <Tab className="aba" eventKey="tab26" title="Usuário">
              <div className="tab-content additemstab mt-3">
                <UserProfilePage />
              </div>
            </Tab>
            
        </Tabs>
    </Container>
    <Modal
        show={exitModal}
        onHide={handleExit}
        dialogClassName="modal-90w text-white"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sair
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white">
          <h2 className="my-2">Deseja Sair?</h2>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={deslogarUser}>
            Sair
          </Button>
          <Button variant="primary" onClick={handleExit}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Homeapp;


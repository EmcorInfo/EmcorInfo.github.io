import React from 'react';
import "./style.css";
import { Container, Tab, Tabs } from 'react-bootstrap';
import ItemsList from '../../components/itemList';
import AddItem from '../../components/additem';
import logo from '../../image/SISTEMA MAGNIFY.ico';

function Homeapp() {
  return (
    <Container className="d-flex flex-column justify-content-center border rounded border-dark" style={{ height: "95%", width: "90%", backgroundColor: "rgba(0 , 0, 0, 0.85)" }}>
      <Container className="d-flex align-items-center justify-content-center m-3">
        <img className="me-3 logoapp" src={logo} alt="MAGNIFY" srcset="" />
        <h2 className="text- text-white">Desenvolvimento do webApp MAGNIFY</h2>
      </Container>
      <Tabs className="abas" defaultActiveKey="tab1" id='tabs'>
        <Tab className="aba" eventKey="tab1" title="Itens">
          <div className="">
            <Tabs className=" mt-2" defaultActiveKey="tab1" id='tabs'>
              <Tab className="" eventKey="tab1" title="Todos os Itens">
                <div className="tab-content">
                  <ItemsList />
                </div>
              </Tab>
              <Tab className="aba" eventKey="tab2" title="Adicionar">
                <div className="tab-content additemstab mt-3">
                  <AddItem />
                </div>
              </Tab>
            </Tabs>
          </div>
        </Tab>
        <Tab className="aba" eventKey="tab2" title="aba 2">
        <div className="tab-content">
          <p className='text-white'>teste</p>
        </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Homeapp;


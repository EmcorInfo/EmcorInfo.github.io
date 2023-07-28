import React from 'react';
import "./style.css";
import { Container, Tab, Tabs } from 'react-bootstrap';
import ItemsList from '../../components/itemList';
import AddItem from '../../components/additem';
import logo from '../../image/SISTEMA MAGNIFY.ico';
import EntrList from '../../components/entrList';
import SaidaList from '../../components/saidaList';

function Homeapp() {
  return (
    <Container className="d-flex flex-column justify-content-center border rounded border-dark" style={{ height: "95%", width: "90%", backgroundColor: "rgba(0 , 0, 0, 0.85)" }}>
      <Container className="d-flex align-items-center justify-content-center m-3  text-white">
        <img className="me-3 logoapp" src={logo} alt="MAGNIFY" srcset="" />
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-end">
            <h2 className="m-0">MAGNIFY </h2>
            <span>webapp</span>
          </div>
          <span className="small m-0 p-0">web app para controle de estoque</span>
        </div>
      </Container>
        <Tabs className="abas mt-2" defaultActiveKey="tab1" id='tabs'>
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
              <div className="tab-content additemstab mt-3">
                <SaidaList />
              </div>
            </Tab> 
            <Tab className="aba" eventKey="tab25" title="Adicionar Item">
              <div className="tab-content additemstab mt-3">
                <AddItem />
              </div>
            </Tab>
            
        </Tabs>
    </Container>
  );
}

export default Homeapp;


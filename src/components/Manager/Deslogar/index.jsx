import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./style.css"
import SideMenu from '../../sidebar';

const SairPage = () => {
    
    const deslogarUser = (e) => {
        try {
            e.preventDefault();
            localStorage.removeItem("token");
            window.location.reload();
            
        } catch (error) {
            console.log(error)
            
        }
    };

    return (

        <Container className="align-items-center d-flex" style={{height: "100vh", marginLeft: 130}}>
            <SideMenu/>
            <Container className='contlogin d-flex flex-column justify-content-center border rounded border-dark'>
                <h2 className="text-center my-3">Deseja Sair?</h2>
                <Container className='contlogin d-flex justify-content-center mb-3'>
                    <Button onClick={deslogarUser} className="botaosair text-center m-2" variant='danger'>Sim</Button>
                    <Button className="botaosair text-center m-2" variant='success'>Não</Button>
                </Container>
            </Container>
        </Container>
    );
}

export default SairPage;

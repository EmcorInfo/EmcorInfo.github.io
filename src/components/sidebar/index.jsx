import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../images/emcorsfundo.png";

function SideMenu() {
  return (
    <>
      <Navbar className='navbar' bg="dark" variant="dark" expand="lg">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav flex-column"> 
            <Navbar.Brand>
                <img className='img-nav' src={logo} alt="" srcset="" />
            </Navbar.Brand>
            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#">Carrossel</Nav.Link>
            <Nav.Link className='nav-link' href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style>
        {`
            .img-nav{
                width: 100%;
            }
            .nav{
                width: 100%;
                position: relative;
               

            }
          .navbar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 100;
            padding: 0;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: #343a40;
            color: #fff;
            width: 8em;
            align-items: flex-start;
        }
          }
          .nav-link {
            width: 6em;
            padding: 0;
            font-size: 16px;
            color: #fff;
          }
          .nav-link:hover {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </>
  );
}

export default SideMenu;

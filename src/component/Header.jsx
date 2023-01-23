import React from 'react';
import {Button, Navbar,Nav, NavDropdown, Form, Container, FormControl} from "react-bootstrap"
import "../my.css"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
  return (
    <div>
        
    <Navbar bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand className="nav-color" href="#">My Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
                <Nav.Link className="nav-color"><i className="fa-solid fa-house"></i>Anasayfa</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link className="nav-color"><i className="fa-solid fa-address-card"></i>Hakkimizda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link className="nav-color" ><i className="fa-solid fa-cart-shopping"></i>Urunler</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/">
            <Nav.Link className="nav-color" ><i className="fa-solid fa-user"></i>Uye girisi</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/">
            <Nav.Link className="nav-color" ><i className="fa-solid fa-user-plus"></i>Kayit ol</Nav.Link>
            </LinkContainer>     
                
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Urun giriniz"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default Header;
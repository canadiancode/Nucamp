import React from 'react';
import './App.css';
import NucampLogo from './app/assets/img/logo.png';

// We can import specific components from ReactStrap
import {Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='Nucamp Logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready for the workshop!
    </div>
  );
}

export default App;

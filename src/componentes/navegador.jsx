import React from 'react';
import {Menu,Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


export const Navegador =()=> {
return (
        <>
            <Menu inverted>
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    src="../src/assets/letras.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                    <Link to='/' >
                    <Menu.Item name='Fans+ Star Wars'></Menu.Item>
                    </Link>
                    <Link to='/personajes' >
                    <Menu.Item name='Personajes'></Menu.Item>
                    </Link>
                    <Link to='/planetas'>
                    <Menu.Item name='Planetas'></Menu.Item>
                    </Link>
                </Container>
            </Menu>

        </>

)
}
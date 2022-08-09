import React from 'react';
import {Menu,Container,Input,Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Login_button,Login_out,Perfil} from '../login';
import { Button } from 'semantic-ui-react';
import {useAuth0} from '@auth0/auth0-react';

export const Navegador =()=> {
    const {isAuthenticated} = useAuth0();
return (
        <>
        <Segment inverted>
        <Menu inverted secondary>
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
                <Menu.Item position='left'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item >
            
                {isAuthenticated ? <>
                    <Perfil/>
                    <Login_out/>
                </>:< Login_button/>}    
             
                </Menu.Item>
         
            </Menu>
        </Segment>
           

        </>

)
}
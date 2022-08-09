
//Se importan las deptencias para poder producir la accion 
import React, { useState, useEffect } from 'react';
import {Navegador} from './componentes/navegador';
import { BrowserRouter, Routes, Route, Router, } from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import  PorpTypes  from "prop-types";
import Pagination from 'react-bootstrap/Pagination';
//Se instancian las paginas para las rutas
import { Inicio } from './componentes/inicio';
import { Personajes } from './componentes/personajes';
import { Planetas } from './componentes/planetas';


//Aqui se exporta la peticion de datos hacia las paginas
export const Muesta_datos = ()=>{
    //se preparan las instacias
    // setCounter(num)
    

    const [people, setPeople] = useState([]);
    const [films, setFilms] = useState([]);
    const [planets, setPlanets] = useState([]);
    //se usa este para que muestre un load mientras hace las peticiones a la api
    const [loading, setLoading] = useState(true);
    // setCounter(counter)
    //SE usa useEffect para que se renderizen las peticiones
    useEffect(()=>{
        //se usan funciones asincronas para que devuelvan los objetos por medio de funcion y se guarden en su variable
        async function fetchPeople(){
            let res = await fetch(`https://swapi.dev/api/people/?page=1&format=json`);
            //se guarda el resultado y se transforma json para que sea mas facil de leer para las consultas
            let data = await res.json();
            //se guarda el resultado en esta funcion nombrada
            setPeople(data.results)
            //se manda una variable boleana para que deje de cargar una vez que se cumpla la promesa
            setLoading(false);
        }
        async function fetchPlanets(){
            let res = await fetch(`https://swapi.dev/api/planets/?page=1&format=json`);
            let data = await res.json();
            setPlanets(data.results)
            setLoading(false);
        }
        async function fetchPeliculas(){
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setFilms(data.results)
            setLoading(false);
        }

        fetchPeople()
        fetchPlanets()
        fetchPeliculas()
   
    },[])
    // console.log('Personajes :',people);

    // console.log('Planetas :',planets);
    return (
        <>
          <BrowserRouter>
          <Navegador/>
          <Container>
            {loading ? (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            ) : (
                <Routes>
                <Route  path='/' element = {<Inicio data={films} />} />
                <Route  path='/personajes' element={<Personajes data={people}/>}/>
                <Route  path='/planetas' element={<Planetas data={planets}/>}/>
                </Routes>
            )}
          </Container>
          </BrowserRouter>             
        </>
    );
}



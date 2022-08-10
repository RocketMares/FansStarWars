import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';

export const  Planetas =({data})=> {

  return (
    <>
    <div className='mt-4 my-4'>
    <h1 className='text-white' >Planetas</h1>
    </div>
    <div className='mt-2 my-2'>
               
        </div>
      <Grid columns={4} >
        {data.map((planets,i)=>{
                return (
                        <>
                        <Grid.Column key={i} >
                                <Card>
                                        <Card.Content>
                                                <Card.Header>
                                                        {planets.name}
                                                </Card.Header>
                                                <Card.Description>
                                                        <strong>Clima: </strong>
                                                        <p>{planets.climate} </p>
                                                        <strong>Diametro: </strong>
                                                        <p>{planets.diameter} m</p>
                                                        <strong>Poblacion: </strong>
                                                        <p>{planets.population}</p>
                                                </Card.Description>
                                             
                                        </Card.Content>
                                </Card>
                        </Grid.Column>
                        </>
                )
        })}
      </Grid>
    </>
  );
}


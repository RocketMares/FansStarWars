import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';



export const  Personajes =({data})=> {
let liga_indi = "";
  return (
    <>
    <div className='mt-4 my-4'>
    <h1 className='text-white' > Personajes</h1>
    </div>
        <div className='mt-2 my-2'>
              
        </div>

      <Grid columns={4} >
        
        {
        data.map((people,i)=>{
                return (
                        <>
                      
                        <Grid.Column key={i} >
                                <Card >
                                        <Card.Content>
                                                <Card.Header>
                                                {people.name}
                                                </Card.Header>
                                                <Card.Description>
                                                        <strong>Altura: </strong>
                                                        <p>{people.height} cm</p>
                                                        <strong>Peso: </strong>
                                                        <p>{people.mass} kg</p>
                                                        <strong>Color de cabello: </strong>
                                                        <p>{people.hair_color}</p>
                                                        <strong>Color de ojos: </strong>
                                                        <p>{people.eye_color}</p>
                                                </Card.Description>
                                             
                                                
                                                
                                        </Card.Content>
                                </Card>
                        </Grid.Column>
                        
                        </>
                )
                {liga_indi = people.url;}
        })}
      </Grid>
     
    </>
  );
}


import React from 'react'
import { Card, Grid,Button } from 'semantic-ui-react';


export  const Inicio =({data})=> {
  return (
    <>
    <div className='mt-4 my-4'>
        <h1 className='text-white' >Películas </h1>   

    </div>
    <Grid columns={4} >
        {data.map((films,i)=>{
                return (
                        <>
                        <Grid.Column key={i} >
                                <Card>
                                        <Card.Content>
                                                <Card.Header>
                                                        {films.title}
                                                </Card.Header>
                                                <Card.Description>
                                                         <strong>Productor: </strong>
                                                        <p>{films.director}</p>
                                                        <strong>Fecha de estreno: </strong>
                                                        <p>{films.release_date}</p>
                                                    
                                                </Card.Description>
                                            
                                        </Card.Content>
                                </Card>
                        </Grid.Column>
                        </>
                )
        })}
      </Grid>
    
    </>

  )
}

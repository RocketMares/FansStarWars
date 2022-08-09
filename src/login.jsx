import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';



export const Login_button =() => {

 const {loginWithRedirect} = useAuth0(); 
  return (
    <button class="ui button" onClick={()=>{
        loginWithRedirect()
    }} >login</button>
  )
}


export const Login_out = () =>{

    const {logout} = useAuth0();
    return(
        <>
          <button class="ui button" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
            </button>
        </>
    );
}

export const Perfil = () =>{
   const { user, isAuthenticated , isLoading } = useAuth0();
   if(isLoading){
        return(
            <>
            <div>Loadin...</div>
            </>
        )
   }
   return (
    isAuthenticated && (
      <div className='container'>
        <img src={user.picture} alt={user.name} className='rounded' height={40} width={40} />  <p className='text-white'>{user.name}</p>
       
      </div>
    )
  );
};
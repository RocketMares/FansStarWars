import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Muesta_datos} from './datos_stars';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('Data')).render(
  <React.StrictMode>
    <Auth0Provider domain='fans-mares.eu.auth0.com' clientId='jAi5p5rY5s5xmR0eMrRT0nXjXge3vaAG' redirectUri={window.location.origin}>
   <Muesta_datos  />
    </Auth0Provider>
  </React.StrictMode>
)


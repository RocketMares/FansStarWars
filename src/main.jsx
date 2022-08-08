import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Muesta_datos} from './datos_stars';


ReactDOM.createRoot(document.getElementById('Data')).render(
  <React.StrictMode>
    <Muesta_datos  />
  </React.StrictMode>
)


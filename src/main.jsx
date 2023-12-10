import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
const domain =  import.meta.env.VITE_APP_DOMAIN
const clientId = import.meta.env.VITE_APP_CLIENT_ID


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/'
      }}
      >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
)

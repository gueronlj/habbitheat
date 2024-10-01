import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const domain =  import.meta.env.VITE_APP_DOMAIN
const clientId = import.meta.env.VITE_APP_CLIENT_ID
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin
          }} >
          <App/>
        </Auth0Provider>
      </Router>
    </QueryClientProvider>       
  </React.StrictMode>
)

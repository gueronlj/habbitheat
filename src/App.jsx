import './App.css';
import {QueryClientProvider, QueryClient,} from '@tanstack/react-query';
import Habits from './pages/habits.jsx';
import Header from './components/Header/header.jsx';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/login.jsx';
import { useState } from 'react';

const queryClient = new QueryClient()

function App() {

  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const [showForm, setShowForm] = useState(false);

  if ( isAuthenticated ){
    return (
      <QueryClientProvider client={queryClient}>
                
          <div> 
            <Header
              user={user}/>           
            <Routes>
              <Route path="/" element={<Habits />} />
              <Route path="/dashboard" element={
                <Dashboard
                  setShowForm={setShowForm}
                  showForm={showForm}/>}/>
            </Routes>  
          </div> 
      
      </QueryClientProvider>
    )
  } else {
    return(
      <Login/>
    ) 
  }
}

export default App

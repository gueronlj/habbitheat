import './App.css';
import {QueryClientProvider, QueryClient,} from '@tanstack/react-query';
import Habits from './pages/habits.jsx';
import Header from './components/Header/header.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/login.jsx';

const queryClient = new QueryClient()

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    !isAuthenticated ? <Login/> :
      <Router>
        <QueryClientProvider client={queryClient}>
          <div> 
            <Header
              user={user}/>           
            <Routes>
              <Route path="/" element={<Habits />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>  
          </div>
        </QueryClientProvider>
      </Router>
  )
}

export default App

import './App.css';
import Habits from './pages/habits.jsx';
import Header from './components/Header/header.jsx';
import { useNavigate, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

function App() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  if (isAuthenticated){
    return (<>                
      <Header
        user={user}/>

      <Routes>
        <Route 
          path="/"
          element={
            <Habits/>} 
        />
        <Route 
          path="/dashboard" 
          element={
            <Dashboard
              setShowForm={setShowForm}
              showForm={showForm}
              user={user}/>}
        />
      </Routes>           
    </>)
  } else {
    return (<>
      <Header/>
      <div className="content">
        <button onClick={() => loginWithRedirect()}>Login</button>
      </div>
    </>)
  }
}

export default App

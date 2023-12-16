import './App.css';
import Habits from './pages/habits.jsx';
import Header from './components/Header/header.jsx';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Login from './pages/login.jsx';

function App() {
    const { isAuthenticated, user, loginWithRedirect, isLoading } = useAuth0();
    const [showForm, setShowForm] = useState(false);

    return (
        <>  
            <Header
                user={user}/>

            {isAuthenticated?
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <Habits/>
                        }/>
                    <Route 
                        path="/dashboard" 
                        element={
                            <Dashboard
                                setShowForm={setShowForm}
                                showForm={showForm}
                                user={user}/>
                        }/>
                </Routes>  
                :
                <>
                    {isLoading ? <h1>Signing in...</h1> 
                    :
                    <Login loginWithRedirect={loginWithRedirect}/>}
                </>      
            }
        </>
    );
}

export default App

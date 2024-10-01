import './App.css';
import Habits from './components/Habits/Habits.jsx';
import Header from './components/Header/header.jsx';
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Settings from './components/Settings/Settings.jsx';
import Login from './components/Login/Login.jsx';

function App() {
    const { isAuthenticated } = useAuth0();
    const [showForm, setShowForm] = useState(false);

    if (!isAuthenticated){
        return <Login/>
    } else {
        return (
            <>  
                <Header />
                
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <Habits/>
                        }/>
                    <Route 
                        path="/settings" 
                        element={
                            <Settings
                                setShowForm={setShowForm}
                                showForm={showForm}/>
                        }/>
                </Routes>  
            </>
        );
    }
}

export default App

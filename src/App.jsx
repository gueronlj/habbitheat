import './App.css'
import {QueryClientProvider, QueryClient,} from '@tanstack/react-query'
import Habits from './pages/habits.jsx';
import Login from './pages/login.jsx';
import { AppBar } from './components/Header/header.jsx'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div> 
          <AppBar/>
          <Routes>
            <Route path="/" element={<Habits />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </div>
      </QueryClientProvider>
    </Router>
    
  )
}

export default App

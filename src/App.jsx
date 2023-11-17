import './App.css';
import {QueryClientProvider, QueryClient,} from '@tanstack/react-query';
import Habits from './pages/habits.jsx';
import Header from './components/Header/header.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './pages/profile.jsx';

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div> 
          <Header/>
          <Routes>
            <Route path="/" element={<Habits />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </div>
      </QueryClientProvider>
    </Router>
    
  )
}

export default App

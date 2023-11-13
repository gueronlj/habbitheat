import './App.css'
import {QueryClientProvider, QueryClient,} from '@tanstack/react-query'
import Habits from './pages/habits.jsx';
import { AppBar } from './components/Header/header.jsx'
import NewHabitForm from './forms/newHabit.jsx';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div> 
        <AppBar/>
        <Habits/>
      </div>
    </QueryClientProvider>
  )
}

export default App

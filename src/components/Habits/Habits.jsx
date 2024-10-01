import HeatGraph from './Heatmap/Heatgraph.jsx'
import {fetchHabits} from '../../utilities/api.js'
import {useQuery} from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import NewHabitForm from '../forms/newHabit.jsx';
const Habits = () => {
    const { user } = useAuth0();
    const [showForm, setShowForm] = useState(false);
    const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(user.email)})

    if (result.isError){
        return(
            <p>{result.error.message}</p>
        )
    }

    if (result.isLoading){
        return(
            <p>Loading...</p>
        )
    }

    if (result.data.length === 0){
        return(
            <>
                <p>You have not added any habits yet.</p>
                <button onClick={() => setShowForm(true)}>
                    Add a new habit
                </button>

                {showForm &&
                    <NewHabitForm 
                    setShowForm={setShowForm}
                    query={result}
                    />
                }
            </>
        )
    }

    return(
        <div className="content">
            {result.data.map((habit) => (
                <HeatGraph
                    key={habit.id}
                    title={habit.title}
                    id={habit.id}
                    isWeighted={habit.isweighted}/>
            ))}    
        </div>
    )
}

export default Habits;
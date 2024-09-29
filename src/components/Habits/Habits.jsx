import HeatGraph from './Heatmap/Heatgraph.jsx'
import {fetchHabits} from '../../utilities/api.js'
import {useQuery} from '@tanstack/react-query'

const Habits = () => {
    const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(1)})

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
            <p>No habits found</p>
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
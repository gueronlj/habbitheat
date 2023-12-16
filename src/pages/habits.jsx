import HeatGraph from '../components/Heatmap/Heatgraph.jsx'
import {fetchHabits} from '../utilities/api.js'
import {useQuery} from '@tanstack/react-query'

const Habits = () => {
   const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(1)})

    return(
        <div className="content">
            {result.data?.name == 'AxiosError' &&
            <p>Server is down!</p>}
            
            {result.isError &&
            <p>{result.error.message}</p>}

            {result.isLoading?
                <>
                    <h1>Welcome!</h1>
                    <p>Loading...</p>
                </>
                : 
                <>
                    {result.data.map((habit) => (
                        <HeatGraph
                        key={habit.id}
                        title={habit.title}
                        id={habit.id}/>
                    ))}
                </>}
        </div>
    )
}

export default Habits;
import HeatGraph from '../components/Heatmap/Heatgraph.jsx'
import {fetchHabits} from '../utilities/api.js'
import {useQuery} from '@tanstack/react-query'

const Habits = () => {

   const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(1)})

   const HeatMaps = () => {
      return (<>
         {result.data.map((habit) => (
            <HeatGraph
               key={habit.id}
               data={habit.dates}
               activity={habit.title}
               id={habit.id}
               result={result}/>
         ))}
      </>);
   };


   return(
      <div className="content">
         {!result &&
            <p>Server down!</p>}

         {result.isError &&
            <p>{result.error.message}</p> 
         }

         {result.isLoading?
            <p>Loading...</p>
         : 
          <HeatMaps />}

      </div>
   )
}

export default Habits;
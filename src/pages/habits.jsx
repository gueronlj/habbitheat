import HeatGraph from '../components/Heatmap/Heatgraph.jsx'
import fetchHabits from '../utilities/fetch-habits.js'
import {useQuery} from '@tanstack/react-query'

const Habits = () => {
   const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(1)})

   const heatMaps = result.data?.map((habit, i ) => {
      return (
         <HeatGraph
            key={i}
            activity={habit.title}
            data={habit.dates}
         />
      )
   })

   return(
      <div className="content">
         {result.isError?
            <p>{result.error.message}</p> 
         : null}

         {result.isLoading?
            <p>Loading...</p>
         : heatMaps}
      </div>
   )
}

export default Habits;
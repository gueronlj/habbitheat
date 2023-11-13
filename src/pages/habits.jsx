import HeatGraph from '../components/Heatmap/Heatgraph.jsx'
import {fetchHabits} from '../utilities/api.js'
import {useQuery} from '@tanstack/react-query'
import { addProgress } from '../utilities/api.js'
import { useEffect, useState } from 'react';

const Habits = () => {

   const result = useQuery({ queryKey: ['habits'], queryFn: () => fetchHabits(1)})

   const heatMaps = result.data?.map((habit) => {
      return (
         <HeatGraph
            key={habit.id}
            activity={habit.title}
            data={habit.dates}
            id={habit.id}
            result={result}/>
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
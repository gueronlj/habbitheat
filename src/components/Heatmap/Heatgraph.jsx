import { useCallback, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import { ColorSelect } from '../ColorSelect/ColorSelect';
import { CheckSquareFilled, CheckSquareOutlined } from '@ant-design/icons';
import { addProgress } from '../../utilities/api.js';
import { format } from 'date-fns';
import {useQuery} from '@tanstack/react-query'

const HeatGraph = ({data, activity, id, result }) => {
   
   
   const [heatColors, setHeatColors] = useState()
   const [loading, setLoading] = useState(false)

   const currentDate = useCallback(() => {
      const formattedDate = format(new Date(), 'yyyy/MM/dd')
      return formattedDate
   })

   const handleAddProgress = async (habitId) => {
      const data = {
         date: currentDate(),
         count: 5
      }
      try{
         setLoading(true)
         await addProgress(habitId, data)
         await result.refetch();
         setLoading(false)
      }catch(e){
         console.log(e)
      }
   }
 
   return (
      <div className = 'habit-container'>
         <div className='toolbar'>
            <h3>{activity}</h3>
            {!loading?
               <CheckSquareOutlined
                  style={{ fontSize: '24px', color: 'white' }}
                  onClick={() => handleAddProgress(id)}/>
            :
            <CheckSquareFilled
               style={{ fontSize: '24px', color: 'green' }} />
            }
            <ColorSelect
               setHeatColors={setHeatColors}/>
         </div>
         <HeatMap
            value={data}
            rectSize={15}
            weekLabels={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
            monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']}
            startDate={new Date('2023/10/28')}
            legendCellSize={0}
            panelColors={heatColors}/>
      </div>      
   )
}
export default HeatGraph;
import { Component, useEffect, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import { ColorSelect } from '../ColorSelect/ColorSelect';
import { CheckCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { addProgress } from '../../utilities/api.js'

const HeatGraph = ({data, activity, id, result}) => {

   const [heatColors, setHeatColors] = useState()

   const [newData, setNewData] = useState({
      date: "2023/03/18",
      count: 5
   })

   const [loading, setLoading] = useState(false)

   const handleAddProgress = async (habitId, data) => {
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
            <h2>{activity}</h2>
            {!loading?
               <CheckSquareOutlined
               style={{ fontSize: '28px', color: 'white' }}
               onClick={() => handleAddProgress(id, newData)}/>
            :
               <p>LOADING</p>
            
            }
            
            <ColorSelect
               setHeatColors={setHeatColors}/>
         </div>
         <HeatMap
            value={data}
            rectSize={15}
            weekLabels={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
            monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']}
            startDate={new Date('2022/11/01')}
            legendCellSize={0}
            panelColors={heatColors}/>
      </div>      
   )
}
export default HeatGraph;
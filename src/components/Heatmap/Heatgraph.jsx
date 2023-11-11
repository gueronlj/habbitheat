import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import { ColorSelect } from '../ColorSelect/ColorSelect';

const HeatGraph = ({data, activity}) => {
   const [heatColors, setHeatColors] = useState()
   
   return (
      <div>
         <div className='toolbar'>
            <h1>{activity}</h1>
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
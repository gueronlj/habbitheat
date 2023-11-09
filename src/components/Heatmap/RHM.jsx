import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import { Toolbar } from '../Toolbar/toolbar';
import { ColorSelect } from '../Dropdown/dropdown';

export const RHM = ({data, activity}) => {
   const [heatColors, setHeatColors] = useState()
   
   return (
      <div>
         <h2>{activity}</h2>
         <HeatMap
            value={data}
            rectSize={20}
            weekLabels={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
            monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']}
            startDate={new Date('2024/01/01')}
            legendCellSize={0}
            panelColors={heatColors}
         />
         <div className='toolbar'>
            <ColorSelect
               setHeatColors={setHeatColors}/>
         </div>
      </div>
          
   )
}
import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import { Toolbar } from '../Toolbar/toolbar';
import { ColorSelect } from '../Dropdown/dropdown';

export const RHM = () => {
   const [heatColors, setHeatColors] = useState()

   const value = [
      { date: '2024/01/11', count:2 },
      ...[...Array(20)].map((_, idx) => ({ date: `2024/01/${idx + 1}`, count: idx })),
      ...[...Array(22)].map((_, idx) => ({ date: `2024/02/${idx + 2}`, count: idx })),
      ...[...Array(28)].map((_, idx) => ({ date: `2024/03/${idx + 1}`, count: idx })),
      ...[...Array(27)].map((_, idx) => ({ date: `2024/04/${idx + 3}`, count: idx })),
      ...[...Array(27)].map((_, idx) => ({ date: `2024/05/${idx + 1}`, count: idx })),
      ...[...Array(26)].map((_, idx) => ({ date: `2024/06/${idx + 1}`, count: idx })),
      ...[...Array(19)].map((_, idx) => ({ date: `2024/07/${idx + 5}`, count: idx })),
      ...[...Array(30)].map((_, idx) => ({ date: `2024/08/${idx + 1}`, count: idx })),
      ...[...Array(23)].map((_, idx) => ({ date: `2024/09/${idx + 6}`, count: idx })),
      ...[...Array(26)].map((_, idx) => ({ date: `2024/10/${idx + 1}`, count: idx })),
      ...[...Array(27)].map((_, idx) => ({ date: `2024/11/${idx + 1}`, count: idx })),
      { date: '2024/04/12', count:2 },
      { date: '2024/05/01', count:5 },
      { date: '2024/05/02', count:5 },
      { date: '2024/05/03', count:1 },
      { date: '2024/05/04', count:11 },
      { date: '2024/05/08', count:32 },
   ];

   console.log(value)
   
   return (
      <div>
         <HeatMap
            value={value}
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
import React, { useMemo } from "react";
import * as d3 from "d3";

//fake data
const data = [
   { x: 'A', y: 'A', value: 100 },
   { x: 'H', y: 'B', value: 2 },
   { x: 'C', y: 'A', value: 54 },
   { x: 'D', y: 'B', value: 12 },
   { x: 'B', y: 'A', value: 2 },
   { x: 'I', y: 'A', value: 12 },
   { x: 'E', y: 'B', value: 23 },
   { x: 'F', y: 'B', value: 1 },
   { x: 'G', y: 'A', value: 2 },
];

const RenderSquares = ({width, hight}) => {

   //get a set of unique x and y values for labels
   const allColumns = useMemo(() => [
      ...new Set(
         data.map((d) =>d.x))
   ], [data])

   const allRows = useMemo(
      () => [...new Set(
         data.map((d) =>d.y))
   ], [data])

   //find min and max values for color scale
   const [min = 0, max = 0] = d3.extent(data.map((d) => d.value));
   
   //sets a range of colors based on value
   const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateRdYlGn)
      .domain([min, max]);

   //draw a square for every data point
   const renderData = data.map((node, i) => {
      if (node.value === null || !node.x || !node.y){
         //stop drawing
         return;
      }
      
      return (
         <div className="square"
            key={i}
            style={{backgroundColor: colorScale(node.value)}}
         />
      )
   })
   
   return (
      <div className="column">
         {renderData}
      </div>
   )
}

export default RenderSquares;
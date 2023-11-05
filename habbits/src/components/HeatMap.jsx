import * as d3 from "d3"; // we will need d3.js
import React, { useMemo } from "react";

const MARGIN = { top: 10, right: 50, bottom: 30, left: 50 };

const data = [
   { x: 'A', y: 'A', value: 100 },
   { x: 'H', y: 'B', value: 2 },
   { x: 'C', y: 'A', value: 54 },
   { x: 'D', y: 'B', value: 12 },
   { x: 'B', y: 'A', value: 2 },,
   { x: 'C', y: 'A', value: 12 },
   { x: 'I', y: 'B', value: 23 },,
   { x: 'F', y: 'B', value: 1 },
   { x: 'K', y: 'A', value: 2 },
 ];

//useMemo so we only do the calculation when data changes
//get every unique y value from data[], put it in a set

const Heatmap = ( {width, height} ) => {
   const boundsWidth = width - MARGIN.right - MARGIN.left;
   const boundsHeight = height - MARGIN.top - MARGIN.bottom;
   const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data]);
   const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data]);
   const [min = 0, max = 0] = d3.extent(data.map((d) => d.value));

   const xScale = useMemo(() => {
      return d3
         .scaleBand()
         .range([0, boundsWidth])
         .domain(allXGroups)
         .padding(0.01);
   }, [data, width]);

   const yScale = useMemo(() => {
      return d3
         .scaleBand()
         .range([0, boundsHeight])
         .domain(allYGroups)
         .padding(0.01);
   }, [data, height]);

   const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateRdYlGn)
      .domain([min, max]);

   const renderRectangles = data.map((d, i) => {
      console.log(i)
      const x = xScale(d.x);
      const y = yScale(d.y);

      if (d.value === null || !x || !y) {
         console.log("Stopped drawing")
         return;
       }

      console.log("drawing a square")
      return (
         <div className="square"
            style={{
               position: "absolute",
               top: y,
               left: x,
               width: xScale.bandwidth(),
               height: yScale.bandwidth(),
               backgroundColor: colorScale(d.value),
            }}
            key={i}
         />
      );
   });

   const xLabels = allXGroups.map((name, i) => {
      const x = xScale(name);

      if (!x) {
         return null;
      }

      return (
         <p
            style={{
               textTransform: "capitalize",
               textAnchor: "middle",
               fontSize: 10,
               position: "absolute",
               top: boundsHeight + 10,
               left: x + xScale.bandwidth() / 2,
            }}
            key={i}
         >
            {name}
         </p>
      );
   });

   const yLabels = allYGroups.map((name, i) => {
      const y = yScale(name);
      if (!y) {
         return null;
      }
      return (
         <text
            key={i}
            x={-5}
            y={y + yScale.bandwidth() / 2}
            textAnchor="end"
            dominantBaseline="middle"
            fontSize={10}
         >
            {name}
         </text>
      );
   });
 
   return (   
      <div width={width} height={height}>
         <rectangles
            width={boundsWidth}
            height={boundsHeight}>
               {renderRectangles}
               {xLabels}
               {yLabels}
         </rectangles>
      </div>
   );
}


export default Heatmap;
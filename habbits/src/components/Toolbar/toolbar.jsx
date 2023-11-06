import { ColorSelect } from '../Dropdown/dropdown.jsx';
import React, { useState } from 'react';

export const Toolbar = ({setHeatColors}) => {

   const dothis = () => {
      setHeatColors(redTheme)
   }

   const tools = [
      {name: 'Color Picker', onClick: dothis}
   ]

   const redTheme = {
      0: '#f4decd',
      2: '#e4b293',
      4: '#d48462',
      10: '#c2533a',
      20: '#ad001d',
      30: '#6e0f11',
    }

   const renderTools = tools.map((tool) => {
      return (
         <div className="shortcut">
            <button onClick={tool.onClick}>{tool.name}</button>
         </div>
      )
   })
   
   return (
      <div className="toolbar">
         <ColorSelect
            setHeatColors={setHeatColors}/>
      </div>
   )
};

import { ColorSelect } from '..ColorSelect/ColorSelect';
import React, { useState } from 'react';

export const Toolbar = ({setHeatColors}) => {

   const tools = [
      {name: 'Color Picker', onClick: dothis}
   ]

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

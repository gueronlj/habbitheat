import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const redTheme = {
   0: '#f4decd',
   2: '#e4b293',
   4: '#d48462',
   10: '#c2533a',
   20: '#ad001d',
   30: '#6e0f11',
 }

const blueTheme = {
   0: '#cfe3f5',
   2: '#9ecae1',
   4: '#6baed6',
   10: '#4292c6',
   20: '#2171b5',
   30: '#084594',
}

const orangeTheme = {
   0: '#ffffcc',
   2: '#ffeda0',
   4: '#fed976',
   10: '#feb24c',
   20: '#fd8d3c',
   30: '#f03b20',
}

const lemonTheme = { 
   0: '#fdff94',
   2: '#f9f871',
   4: '#f5f442',
   10: '#f2de02',
   20: '#ffd000',
   30: '#e3bd00',
}

export const ColorSelect = ({setHeatColors}) => {
   const items = [
      {
          label: "Red",
          key: '0',
          onClick: () => {
             setHeatColors(redTheme)
          }
      },
      {
        label: "Green",
        key: '1',
        onClick: () => {
           setHeatColors()
        }
      },
      {
         label: "Blu",
         key: '2',
         onClick: () => {
             setHeatColors(blueTheme)
         }
      },
      {
         label: "Orange",
         key: '3',
         onClick: () => {
             setHeatColors(orangeTheme)
         }
      },
      {
         label: "Yellow",
         key: '4',
         onClick: () => {
             setHeatColors(lemonTheme)
         }
      }
    ];

   return(
      <Dropdown
         menu={{
            items,
          }}
         trigger={['click']}>
         <a onClick={(e) => e.preventDefault()}>
         <Space>
            Color
            <DownOutlined />
         </Space>
      </a>
      </Dropdown>
   )
}
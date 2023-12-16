import { ColorSelect } from './ColorSelect/ColorSelect.jsx';
import { CheckSquareFilled, CheckSquareOutlined } from '@ant-design/icons';
import { addProgress } from '../../utilities/api.js';
import { format } from 'date-fns';
import { useCallback } from 'react';
import {IntensitySelect} from './IntensitySelect/intensity-select.jsx';
import { useState } from 'react';
import style from './style.module.css';

export const Toolbar = ({setHeatColors, title, loading, setLoading, fetchData, id}) => {

    const [intensityIndex, setIntensityIndex] = useState('Intensity')

    const currentDate = useCallback(() => {
        const formattedDate = format(new Date(), 'yyyy/MM/dd')
        return formattedDate
    })

    const handleAddProgress = async (habitId) => {
        const data = {
            date: currentDate(),
            count: intensityIndex
        }
        try {
            setLoading(true)
            await addProgress(habitId, data)
            await fetchData()
            setLoading(false)
        } catch(e) {
            console.log(e.message)
        }
    }

   return (
      <div className={style.toolbar}>
            <h3>{title}</h3>
            <div className={style.tools}>
                <IntensitySelect
                    intensity={intensityIndex}
                    setIntensityIndex={setIntensityIndex}/>
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
         </div>
   )
};

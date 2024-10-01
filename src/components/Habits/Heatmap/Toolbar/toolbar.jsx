import { ColorSelect } from './ColorSelect/ColorSelect.jsx';
import { CheckSquareFilled, CheckSquareOutlined, UndoOutlined } from '@ant-design/icons';
import { addProgress, undoProgress } from '../../../../utilities/api.js';
import { format } from 'date-fns';
import { useCallback } from 'react';
import {IntensitySelect} from './IntensitySelect/intensity-select.jsx';
import { useState, useEffect } from 'react';
import style from './style.module.css';
import axios from 'axios';  

export const Toolbar = ({setHeatColors, title, loading, setLoading, fetchData, id, isWeighted}) => {

    const [intensityIndex, setIntensityIndex] = useState('Intensity')
    const [weighted, setWeighted] = useState()

    const url = import.meta.env.VITE_APP_ENDPOINT_DEV;

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

    const handleUndo = async () => {
        try{
            const response = await axios.put(`${url}/api/habits/edit/${id}`);
            console.log(response.data)
            await fetchData()
        } catch(e){
            console.log(e.message);
        }
    };

    useEffect(() => {
        setWeighted(isWeighted)
    }, [])

    return (
        <div className={style.toolbar}>
            <h3>{title}</h3>
            <div className={style.tools}>
                <div className={style.intensitySelect}>
                    {weighted &&
                        <IntensitySelect
                            setIntensityIndex={setIntensityIndex}/>
                    
                    }
                    {!loading?
                        <CheckSquareOutlined
                            style={{ fontSize: '27px', color: 'white' }}
                            onClick={() => handleAddProgress(id)}/>
                    :
                        <CheckSquareFilled
                            style={{ fontSize: '27px', color: 'green' }} />
                    }
                </div>   
                <UndoOutlined
                    style={{ fontSize: '24px', color: 'white' }}
                    onClick={handleUndo} />
                <ColorSelect
                    setHeatColors={setHeatColors}/>
            </div>        
        </div>
    )
};

import { useEffect, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import axios from 'axios';
import { Toolbar } from '../Toolbar/toolbar.jsx';

const HeatGraph = ({ title, id, isWeighted }) => {

   const [heatColors, setHeatColors] = useState()
   const [loading, setLoading] = useState(false)
   const [data, setData] = useState()
   const URL = import.meta.env.VITE_APP_ENDPOINT_DEV;

   const fetchData = async () => {
        try{
            const response = await axios.get(`${URL}/api/habits/id/${id}`)
            setData(response.data[0].dates)
        } catch (e) {
            console.log(e.message)
        }
   }

   useEffect(() => {
        fetchData()
   }, [])
 
    return (
        <div className = 'habit-container'>
            <Toolbar
                title={title}
                loading={loading}
                setLoading={setLoading}
                setHeatColors={setHeatColors}
                fetchData={fetchData}
                id={id}
                isWeighted={isWeighted}/>
            <HeatMap
                value={data}
                rectSize={15}
                weekLabels={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']}
                startDate={new Date('2023/10/28')}
                legendCellSize={0}
                panelColors={heatColors}/>
        </div>      
    )
}
export default HeatGraph;
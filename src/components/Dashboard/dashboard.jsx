import styles from './dashboard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchHabits, deleteHabit } from '../../utilities/api';
import ConfirmModal from '../../components/ConfirmModal/confirm-modal';
import NewHabitForm from '../../forms/newHabit';
import { useState } from 'react';
import SettingsCard from '../SettingsCard/settingsCard';


const Dashboard = ( {showForm, setShowForm}) => {
   const userId = 1;
   const [showConfirm, setShowConfirm] = useState(false);
   const [targetId, setTargetId] = useState();

   const query = useQuery({queryKey:['habits'], queryFn: () => fetchHabits(userId)})

   const confirmDelete = async (id) => {
      try{
         await setShowConfirm(false);
         await deleteHabit(id);
         query.refetch();       
      } catch(e){
         console.log(e.message)
      }
   }

   return(
      <div className={styles.container}>
         <h2>Tracked Habits</h2>
         <div className={styles.cardsContainer}>
            {query.data?.map((habit) => {
               return(
                  <SettingsCard
                     key={habit.id}
                     habit={habit}
                     setTargetId={setTargetId}
                     setShowConfirm={setShowConfirm}/>
               )
            })}
            {showForm && 
               <NewHabitForm 
                  setShowForm={setShowForm}
                  query={query}/>}
         </div>

         {showConfirm && 
            <ConfirmModal
               onConfirm={confirmDelete}
               setShowConfirm={setShowConfirm}
               targetId={targetId}/>}       
      </div>
   )
}

export default Dashboard;
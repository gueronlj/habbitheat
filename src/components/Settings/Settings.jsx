import styles from './settings.module.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHabits, deleteHabit } from '../../utilities/api';
import ConfirmModal from '../ConfirmModal/confirm-modal';
import NewHabitForm from '../../forms/newHabit';
import SettingsCard from './SettingsCard/settingsCard';

const Settings = () => {
   const [showForm, setShowForm] = useState(false);
   const [showConfirm, setShowConfirm] = useState(false);
   const [targetId, setTargetId] = useState();
   const userId = 1;

   const query = useQuery({queryKey:['habits'], queryFn: () => fetchHabits(userId)})

   const confirmDelete = async (id) => {
      try{
         setShowConfirm(false);
         await deleteHabit(id);
         query.refetch();       
      } catch(e){
         console.log(e.message)
      }
   }

   if (query.data === null){
      return(
         <p>Server is down!</p>
      )
   }

   if (query.isLoading){
      return(
         <p>Loading...</p>
      )
   }

   if (query.data.length === 0){
      return(
         <p>No habits found</p>
      )
   }

   return(
      <>
         <SideMenu/>
         <div className={styles.container}>
            <h2>Tracked Habits</h2>

            <button 
               className={styles.addHabitButton}
               onClick={() => setShowForm(true)}>
                  Add a new habit
            </button>

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
      </>
   )
}

export default Settings;
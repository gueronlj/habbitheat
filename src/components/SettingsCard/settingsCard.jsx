import styles from './card.module.css';
import EditHabit from '../../forms/editHabit';   

const SettingsCard = ({habit, setTargetId, setShowConfirm}) => {

   const handleDelete = (id) => {
      setTargetId(id)
      setShowConfirm(true);
   }

   return(   
      <div key={habit.id} className={styles.card}>
         <h3>{habit.title}</h3>
         <EditHabit/>
         <button onClick={()=>handleDelete(habit.id)}>Delete</button>
      </div>
   )
}

export default SettingsCard;
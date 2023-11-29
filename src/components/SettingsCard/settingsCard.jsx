import styles from './card.module.css';
import EditHabit from '../../forms/editHabit';   

const SettingsCard = ({habit, setTargetId, setShowConfirm}) => {

   return(   
      <div key={habit.id} className={styles.card}>
         <h3>{habit.title}</h3>
         <EditHabit
            setTargetId={setTargetId}ß
            setShowConfirm={setShowConfirm}/>
      </div>
   )
}

export default SettingsCard;
import styles from './card.module.css';
import EditHabit from '../../forms/editHabit.jsx';   

const SettingsCard = ({habit, setTargetId, setShowConfirm}) => {

   return(   
      <div key={habit.id} className={styles.card}>
         <h3>{habit.title}</h3>
         <EditHabit
            id={habit.id}
            setTargetId={setTargetId}
            setShowConfirm={setShowConfirm}
            habit={habit}/>
      </div>
   )
}

export default SettingsCard;
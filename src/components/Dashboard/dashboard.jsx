import styles from './dashboard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchHabits, deleteHabit } from '../../utilities/api';
import NewHabitForm from '../../forms/newHabit';


const Dashboard = ( {showForm, setShowForm}) => {
   const userId = 1;

   const query = useQuery({queryKey:['habits'], queryFn: () => fetchHabits(userId)})


   const handleDelete = async (id) => {
      try{
         await deleteHabit(id);
         query.refetch();
      } catch(e){
         console.log(e)
      } 
   }

   return(
      <div className={styles.container}>
         <h2>Tracked Habits</h2>
         <div className={styles.cardsContainer}>
            {query.data?.map((habit) => {
               return(
                  <div key={habit.id} className={styles.card}>
                     <h3>{habit.title}</h3>
                     <button onClick={() => handleDelete(habit.id)}>Delete</button>
                  </div>
               )
            })}
            {showForm && 
            <NewHabitForm 
               setShowForm={setShowForm}
               query={query}/> }
         </div>       
      </div>
   )
}

export default Dashboard;
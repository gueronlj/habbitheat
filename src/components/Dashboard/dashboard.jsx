import styles from './dashboard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchHabits } from '../../utilities/api';

const Dashboard = () => {
   const userId = 1;

   const query = useQuery({queryKey:['habits'], queryFn: () => fetchHabits(userId)})


   const handleDelete = (id) => {
      console.log(`deleting: ${id}`);
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
         </div>
      </div>
   )
}

export default Dashboard;
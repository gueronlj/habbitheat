import style from './header.module.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
   const {
      user,
      logout,
      isAuthenticated
    } = useAuth0();

   const handleLogout = () => {
      logout({ returnTo: 'http://localhost:5173/' });
   }

   return(
      <div className={style.header}>
         <h2>Habit Heat</h2>
         <p>Hello, {user.email}!</p>
         <div className={style.link}>
            <Link to="/">Heatmaps</Link>
         </div>
         <div className={style.link}>
            <Link to="/dashboard">Dashboard</Link>
         </div>
         {isAuthenticated &&
            <div className={style.link}>
               <Link onClick={handleLogout}>Logout</Link>
            </div>}
      </div>
   )
}

export default Header;
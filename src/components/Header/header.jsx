import style from './header.module.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
   const {user, logout, isAuthenticated } = useAuth0();

   const handleLogout = () => {
      logout({ returnTo: 'http://localhost:5173/' });
   }

   return(
      <div className={style.header}>
         <h2>Habit Heat</h2>    
         <Link className={style.link} to="/">Heatmaps</Link>
         <Link className={style.link} to="/dashboard">Dashboard</Link>
         {user &&
            <p>Hello, {user.email}!</p>
         }
         {isAuthenticated &&
            <Link className={style.link} onClick={handleLogout}>Logout</Link>
         }
      </div>
   )
}

export default Header;
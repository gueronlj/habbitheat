import style from './header.module.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
   const {logout, isAuthenticated, user } = useAuth0();

   const handleLogout = () => {
      logout({ returnTo: 'https://habbitheat.vercel.app' });
   }

   return(
      <div className={style.header}>
         <h2>Habit Heat</h2>    
         <Link className={style.link} to="/">Heatmaps</Link>
         <Link className={style.link} to="/settings">Settings</Link>      
         {isAuthenticated &&
            <>
               <p>{user.email}</p>
               <Link className={style.link} onClick={handleLogout}>Sign-out</Link>
            </>
         }
      </div>
   )
}

export default Header;
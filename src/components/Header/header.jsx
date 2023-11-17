import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
   return(
      <div className={style.header}>
         <h2>Habit Heat</h2>
         <div className={style.link}>
            <Link to="/">Heatmaps</Link>
         </div>
         <div className={style.link}>
            <Link to="/profile">Profile</Link>
         </div>
      </div>
   )
}

export default Header;
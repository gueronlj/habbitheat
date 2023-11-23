import style from './side-menu.module.css'

const SideMenu = ({setShowForm}) => {
   return(
      <div className={style.sideMenu}>
         <ul>
            <li onClick={() => setShowForm(true)}> <a>New</a></li>
            <li> <a>Stuff</a></li>
         </ul>
      </div>
   )
}
export default SideMenu
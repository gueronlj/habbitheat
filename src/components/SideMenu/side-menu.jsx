import style from './side-menu.module.css'

const SideMenu = ({setShowForm}) => {
   return(
      <div className={style.sideMenu}>
         <ul>
            <li onClick={() => setShowForm(true)}>New</li>
            <li>Stuff</li>
         </ul>
      </div>
   )
}
export default SideMenu
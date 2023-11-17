import style from './side-menu.module.css'

const SideMenu = () => {
   return(
      <div className={style.sideMenu}>
         <ul>
            <li>New</li>
            <li>Stuff</li>
         </ul>
      </div>
   )
}
export default SideMenu
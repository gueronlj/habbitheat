import Dashboard from "../components/Dashboard/dashboard";
import SideMenu from "../components/SideMenu/side-menu";

const Profile = () => {
   return(
      <div className="profile-container">
         <SideMenu/>
         <Dashboard/>
      </div>
   )
};

export default Profile;
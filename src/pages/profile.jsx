import { useState } from "react";
import Dashboard from "../components/Dashboard/dashboard";
import SideMenu from "../components/SideMenu/side-menu";

const Profile = () => {

   const [showForm, setShowForm] = useState(false);

   return(
      <div className="profile-container">
         <SideMenu
            setShowForm={setShowForm}/>
         <Dashboard
            showForm={showForm}
            setShowForm={setShowForm}/>
      </div>
   )
};

export default Profile;
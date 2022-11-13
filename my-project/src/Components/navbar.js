import React from "react";
import {NavLink} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo_pic from "../image/logo_pic.jpg";

function Navbar(){

  const { loginWithRedirect } = useAuth0();
    return (

   <div className="nav">
   <div className="logo">
    <NavLink to="/">  <img id="logo_picture" src={logo_pic}/></NavLink>
  
  </div>
  <div className="menu">
   
        <NavLink to="/plans">Plans&Menu</NavLink>
        <NavLink to="/how">how it works</NavLink>
        <NavLink to="/gifts">Gifts</NavLink>
        <NavLink to="/refer">Refer a friend</NavLink>
        <NavLink to="/help">Help</NavLink>
        
        
       

      
    

  </div>

  <div className="login_signup">
     <button onClick={() => loginWithRedirect()}>Log In</button>
    <NavLink  to="signup"><button id="blue_button">Sign Up</button></NavLink>
    

  </div>




   </div>




    )
}
export default Navbar;
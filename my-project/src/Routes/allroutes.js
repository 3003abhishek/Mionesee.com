import React from "react"
import {Routes,Route} from "react-router-dom";
import Home from "../Home";
import Gifts from "../Pages/gifts";
import Help from "../Pages/help";
import How from "../Pages/how";
import Refer from "../Pages/refer";
import Plans from "../Pages/plans";
// import Login from "../Pages/login";
import Signup from "../Pages/signup";



function Allroutes(){
return(
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/gifts" element={<Gifts/>}/>
<Route path="/how" element={<How/>}/>
{/* <Route path="/login" element={<Login/>}/> */}
<Route path="/refer" element={<Refer/>}/>
<Route path="/plans" element={<Plans/>}/>

<Route path="/signup" element={<Signup/>}/>
<Route path="/help" element={<Help/>}/>




</Routes>





)





}
export default Allroutes;
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function TopNavigation() {
  return (
    
    
    <nav>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/tasks"}>Tasks</NavLink>
      <NavLink to={"/leaves"}>Leaves</NavLink>
      <NavLink to={"/editProfile"}>Edit Profiles</NavLink>
      <NavLink to={"/"}>SignOut</NavLink>
    </nav>
  
    // <nav>
    //   <Link to={"/dashboard"}>Dashboard</Link>
    //   <Link to={"/tasks"}>Tasks</Link>
    //   <Link to={"/leaves"}>Leaves</Link>
    //   <Link to={"/editProfile"}>Edit Profiles</Link>
    //   <Link to={"/"}>SignOut</Link>
    // </nav>
  )
}

export default TopNavigation

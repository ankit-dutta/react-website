import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

 const Sidebar = () => {
  return (
      <>
      <div className='sidebar-main-container'> {/*MAIN DIV OPEN */}
    {/* <h1>This is a side bar</h1> */}
    <div className='logo-section'>
      <img src = "" />
      <h3>Sped@home</h3>
    </div>
   
   <div className='sidebar-links-container'>
    <ol className='link-style'>

    <li> <NavLink to = "/" activeClassName = "active" className='react-link' >🏠 Home</NavLink></li>
   <li> <NavLink to = "/dashboard"  className='react-link '>◾◽ Dashboard</NavLink></li>
   <li> <NavLink to = "/assessment" className='react-link '>📝 &nbsp;Assessment</NavLink></li>
   <li><NavLink to = "/support" className='react-link '>&#9432; &nbsp; Support</NavLink></li>
   <li> <NavLink to = "/parent" className='react-link'> 👪 Parent Profile</NavLink></li>
   <li> <NavLink to = "/plans" className='react-link' >📑 Plans</NavLink></li>
   <li> <NavLink to = "/log" className='react-link' >📤 Log Out</NavLink></li>

   {/* <li className='react-link' ></li> */}
    </ol >
    </div>

    </div>   {/*MAIN DIV CLOSE */}


    </>
  )
}

export default Sidebar;

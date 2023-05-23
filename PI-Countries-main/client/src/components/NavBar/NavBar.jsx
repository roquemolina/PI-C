import React from 'react';
import { NavLink } from 'react-router-dom';

 const NavBar = () => {
  return ( 
    <div>
      <h3>MI NAV VAR ACA</h3>
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button>Home</button>
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button>Form</button>
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button>Detail</button>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >
        <button onClick={console.log()}>Log Out</button>
      </NavLink>
    </div>
   );
 }
  
 export default NavBar;
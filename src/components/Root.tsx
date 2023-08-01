import React from 'react';
import classes from '../styles/Root.module.css';
import { NavLink,Outlet } from 'react-router-dom';
const Root: React.FC<{}> = () => {
    return(
      <React.Fragment> 
        <header>
          <nav>
            <ul>
            <li>
                <NavLink to="/Games" className= {({isActive}) => isActive ? classes.active : undefined} end>Games</NavLink>
            </li>
            <li>
                <NavLink to="/Matches" className= {({isActive}) => isActive ? classes.active : undefined} >Matches</NavLink>
            </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </React.Fragment>
       
      );
}

export default Root;
import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.css';
import {NavLink} from 'react-router-dom'


const Navigation = (props) =>{
    return(
        <nav className="Nav">
            <div className="Nav-logo">
                <Logo/>
                <span>Github Finder</span>
            </div>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink> 
                </li>

                <li>
                    <NavLink exact to="/about">About</NavLink>  
                </li>
            </ul>
        </nav>
    )
}


export default Navigation;
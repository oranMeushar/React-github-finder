import React from 'react';
import './Logo.css';
import githubLogo from '../../assets/github.png';
import {Link} from 'react-router-dom';

const Logo = (props) =>{
    return(
        <div className="Logo">
            <Link to={'/'}><img className="Logo-img" src={githubLogo}></img></Link>
              
        </div>
    )
}

export default Logo;
import React from 'react';
import './User.css';
import {Link} from 'react-router-dom';

const User = (props) =>{
    const params = props.info.slice(props.info.lastIndexOf('/'),props.info.length)
    return(
        <div className="User">
            <img src={props.imageUrl} alt=""/>
            <h2 className="User-name">{props.name}</h2>
            <Link to={`users${params}`}>More</Link>    
        </div>
    )
}

export default User;
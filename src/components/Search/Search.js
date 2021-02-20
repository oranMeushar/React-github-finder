import React from 'react';
import './Search.css';
import search from '../../assets/search-black.png';

const Search = (props) =>{
    return(
        <form action="" className="Search" onSubmit={props.submit}>
            <div className="input-wrapper">
                <input type="text" name="search" value ={props.search} placeholder="Search User..." onChange={props.changed}/>
                <button type="submit"><img src={search} alt="search-icon" onClick={props.submit}/></button>
            </div>
        </form>
    )
}


export default Search;
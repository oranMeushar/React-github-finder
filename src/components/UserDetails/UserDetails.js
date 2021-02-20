import React from 'react'
import './UserDetails.css';
import UserRepos from '../UserRepos/UserRepos';

const UserDetails = (props) =>{
    return(
        <div className="UserDetails">
            <div className="UserDetails-main">
                <div className="UserDetails-main-left">
                    <img src={props.user.avatar_url} alt=""/>
                    <h1>{props.user.login}</h1>
                    <p>Location: {props.user.location}</p>
                </div>
                <div className="UserDetails-main-right">
                    <h1>Bio</h1>
                    <h3>{props.user.bio?`"${props.user.bio}"`:'"No biography to display"'}</h3>
                    <a href={props.user.html_url} target="_blank">Vist Github Profile</a>
                    <p>UserName: {props.user.name}</p>
                    <p>Company: {props.user.company?props.user.company:'No company'}</p>
                    <p>Created at:{props.user.created_at}</p>
                </div>
            </div>
            <div className="UserDetails-contribution">
                    <h3 className="color color-red">Followers: {props.user.followers}</h3>
                    <h3 className="color color-green">Following: {props.user.following}</h3>
                    <h3 className="color color-blue">Public repos: {props.user.public_repos}</h3>
                    <h3 className="color color-purple">Public Gists: {props.user.public_gists}</h3>
            </div>
            <UserRepos userRepos = {props.userRepos}/>
        </div>
    )
}

export default UserDetails;
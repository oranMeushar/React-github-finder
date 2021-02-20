import React from 'react';
import './UserRepos.css';

const UserRepos = (props) => {
    const repos = [...props.userRepos];
    const repoList = repos.map((repos) =>{
        return(
            <li key={repos.id}><a href={repos.html_url} target="_blank">{repos.name}</a></li>
        )
    })
    return(
        <div className="UserRepos">
            <h1>{repos.length} last repos:</h1>
            <ul>
                {repoList}
            </ul>
        </div>
    )
}

export default UserRepos;
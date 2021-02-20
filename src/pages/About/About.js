import React from 'react';
import './About.css';

const About = () =>{
    return(
        <div className="About">
            <h1 className="About-header">About This App</h1>
            <h3>App to search Github users.The search result is shown<br/>
                because either the name of the user contains the search<br/>
                or the biography of the user contains the search.
            </h3>
            <h4><span>Note:</span> according to GitHub API, you can't make more<br/>
                than 10 requests per minute</h4>
            <p>Version:1.0.0</p>
        </div>
    )
}

export default About;
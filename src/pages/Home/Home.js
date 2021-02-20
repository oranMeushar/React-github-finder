import React from 'react';
import './Home.css';

import UsersList from '../../containers/UsersList/UsersList';

const Home = () => {
    return(
        <div className="Home">
            
            <UsersList/>
        </div>
    )
}
export default Home;
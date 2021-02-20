import React from 'react'
import './AboutUser.css';
import {withRouter} from 'react-router-dom';
import UserDetails from '../../components/UserDetails/UserDetails'
class AboutUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:"",
            userRepos:""
        }
    }
    async componentDidMount(){
        let urlMainData = `https://api.github.com${this.props.location.pathname}`;
        let urlRepo = `https://api.github.com${this.props.location.pathname}/repos?per_page=5&sort=created:asc`;
        let result = await Promise.all([fetch(urlMainData), fetch(urlRepo)]);
        result = await Promise.all([result[0].json(), result[1].json()])
        this.setState({
            user:result[0],
            userRepos:result[1]
        });
    }
    render(){
        return(
            <div className="AboutUser">
                <UserDetails 
                    user={this.state.user}
                    userRepos = {this.state.userRepos}/>
            </div>
        );
    }    
}

export default withRouter(AboutUser);
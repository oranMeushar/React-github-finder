import React from 'react';
import './UsersList.css';
import User from './User/User';
import api from '../../util/api';
import Modal from '../../components/UI/Modal/Modal';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
import * as storage from '../../util/sessionStorage';
import Pagination from '../../components/Pagination/Pagination';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            search:"",
            isLoading:false,
            message:{
                status:false,
                info:""
            },
            pagination:{
                perPage:60,
                totalPages:null,
                currentPage:1,
                previousPage:null,
                nextPage:null
            }
        }
    }
    searchHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })    
    }

    componentDidMount(){
        let lastData = storage.storageGet();
        if (lastData) {
            this.setState({
                pagination:lastData.pagination,
                search:lastData.search,
                users:lastData.users
            })    
        }
    }
    submitHandler = async (e) =>{
        e.preventDefault();
        const {search, pagination} = this.state;
        if (search !== "") {
            const stateCopy = {...this.state};
            this.setState({
                isLoading:true,
            })
            const data = await api(search, pagination);
            if (!data) {
                return this.handleGithubResponse(data);
            }
            stateCopy.pagination.totalPages = Math.ceil(data.total_count / stateCopy.pagination.perPage)
            this.setState({
                users:data.items,
                pagination:stateCopy.pagination,
                isLoading:false,
            }); 
            storage.storageSet(this.state);
        }
        else{
            const info = `Please provide a valid input`
            this.handleMessage(info);
        }   
    }

    handlePaginationButtons = async (e) =>{
        const {search, pagination} = this.state;
        if (e.target.className.includes('Pagination-left')) {
            pagination.previousPage = pagination.currentPage - 2;
            pagination.nextPage = pagination.currentPage;
            pagination.currentPage -= 1;
        }
        else{
            pagination.previousPage = pagination.currentPage;
            pagination.nextPage = pagination.currentPage + 2;
            pagination.currentPage += 1;
        }
        this.setState({
            pagination,
            isLoading:true
        })
        
        const data = await api(search, pagination);
        this.handleGithubResponse(data)
        
    }

    handleMessage = (info) =>{
        this.setState({
            isLoading:false,
            message:{
                status:true,
                info,
            }     
        });
        setTimeout(() => {
            this.setState({
                message:{
                    status:false,
                    info:"",
                }     
            });
        }, 2500);
    }

    handleGithubResponse = (data) =>{
        if (data) {
            this.setState({
                users:data.items,
                isLoading:false,
            });
            storage.storageSet(this.state);
        }
        else{
            const info = `Forbidden! Too many requests.
            10 requests per minute`
            this.handleMessage(info);
        }
    }

    render(){
        let pagination = null;
        let modal = null;
        let loader = null;

        if (this.state.users.length != 0) {
            pagination = (
                <Pagination 
                pagination = {this.state.pagination}
                clicked = {this.handlePaginationButtons}/>
            )
        }
        if (this.state.message.status) {
            modal = (
                <Modal>
                    <h1 className="error-message">{this.state.message.info}</h1>
                </Modal>
            )
        }
        if (this.state.isLoading) {
            modal = <Modal><Loader/></Modal>;  
        }
        return(
            <>
                {loader}
                <Search 
                    changed = {this.searchHandler}
                    submit = {this.submitHandler}
                    search = {this.state.search}
                />
                <div className="UsersList">
                    <div className="UsersList-list">
                        {
                            this.state.users.map((user) =>{
                                return(
                                    <User
                                        key={user.id}
                                        name={user.login} 
                                        imageUrl={user.avatar_url} 
                                        info={user.url}
                                    />
                                )
                            })
                        }
                    </div>
                    {modal}
                    {pagination}
                </div>
            </>
        )
    }
}
export default UsersList;
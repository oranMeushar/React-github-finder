const api = async(search, pagination) =>{
    const result = await fetch(
        `https://api.github.com/search/users?q=
        ${search}&page=
        ${pagination.currentPage}&per_page=
        ${pagination.perPage}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,{
        headers:{
            'Accept': 'application/vnd.github.v3+json',
        }
    });
    let data = null;
    if (result.status === 200) {
        data = await result.json();
        return data;
    }    
    return data;
}

export default api;
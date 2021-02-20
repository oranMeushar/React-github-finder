
export const storageSet = (state) =>{
    const lastData = JSON.stringify({
        pagination:state.pagination,
        search:state.search,
        users:state.users
    });
    sessionStorage.setItem('lastData',lastData);
}

export const storageGet = (state) =>{
    let lastData = sessionStorage.getItem('lastData');
    if (lastData) {
        lastData = JSON.parse(lastData);
        return lastData;    
    }
    return null;
}

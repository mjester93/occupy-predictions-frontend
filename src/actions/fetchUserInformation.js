const fetchUserInformation = (userId) => {


    return (dispatch) => {
        dispatch( {type: 'LOADING_USER_INFORMATION'} );

        fetch('http://localhost:3000/users/' + userId)
        .then(response => {
            return response.json()
        })
        .then(user => {
            dispatch( {type: 'ADD_USER_INFORMATION', user} )
        })
    } 
};

export default fetchUserInformation;
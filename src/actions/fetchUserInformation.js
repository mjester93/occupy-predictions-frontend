const fetchUserInformation = (userId) => {


    return (dispatch) => {
        dispatch( {type: 'LOADING_USER_INFORMATION'} );

        fetch('http://localhost:3000/users/' + userId)
        .then(response => {
            // debugger;
            return response.json()
        })
        .then(user => {
            // debugger;
            dispatch( {type: 'ADD_USER_INFORMATION', user} )
        })
    } 
};

export default fetchUserInformation;
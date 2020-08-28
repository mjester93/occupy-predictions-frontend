import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react';

import MyProfileLeftSideContainer from './MyProfileLeftSideContainer';
import MyProfileRightSideContainer from './MyProfileRightSideContainer';

import fetchUserInformation from '../actions/fetchUserInformation';

const MyProfileContainer = (props) => {

    useEffect(() => {
        const userId = props.match.params.id;
        props.fetchUserInformation(userId);
        console.log(props)
    }, [])

    return (
        <Grid container>
            <Grid.Row stretched>
                <Grid.Column width={5}>
                    <MyProfileLeftSideContainer />
                </Grid.Column>
                <Grid.Column width={11}>
                    <MyProfileRightSideContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.user,
        loading: state.usersReducer.loading
    }
}

export default withRouter(connect(mapStateToProps, { fetchUserInformation })(MyProfileContainer));
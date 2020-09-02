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
    }, [])

    return (
        <Grid id="op-container">
            <Grid.Row stretched>
                <Grid.Column width={4}>
                    <MyProfileLeftSideContainer userId={props.match.params.id} />
                </Grid.Column>
                <Grid.Column width={12}>
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
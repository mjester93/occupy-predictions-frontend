import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import HomePageLeftSideContainer from './HomePageLeftSideContainer';
import HomePageRightSideContainer from './HomePageRightSideContainer';

import { fetchScheduledGames } from '../actions/fetchScheduledGames'

const HomePageContainer = (props) => {

    return (
        <Grid container>
            <Grid.Row stretched>
                <Grid.Column width={4}>
                    <HomePageLeftSideContainer />
                </Grid.Column>
                <Grid.Column width={12}>
                    <HomePageRightSideContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScheduledGames: dispatch(fetchScheduledGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import HomePageLeftSideContainer from './HomePageLeftSideContainer';
import HomePageRightSideContainer from './HomePageRightSideContainer';

import fetchScheduledGames from '../actions/fetchScheduledGames';
import fetchMiniLeaderboard from '../actions/fetchMiniLeaderboard';

const HomePageContainer = (props) => {

    return (
        <Grid id="op-container">
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
        fetchMiniLeaderboard: state.mini,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScheduledGames: dispatch(fetchScheduledGames()),
        fetchMiniLeaderboard: dispatch(fetchMiniLeaderboard()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
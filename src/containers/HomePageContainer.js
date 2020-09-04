import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import HomePageLeftSideContainer from './HomePageLeftSideContainer';
import HomePageRightSideContainer from './HomePageRightSideContainer';

import fetchScheduledGames from '../actions/fetchScheduledGames';
import fetchMiniLeaderboard from '../actions/fetchMiniLeaderboard';

const HomePageContainer = (props) => {

    useEffect(() => {
        function fetchData() {
            props.dispatch(fetchScheduledGames());
            props.dispatch(fetchMiniLeaderboard());
        }

        fetchData();
    }, [])

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

export default connect(mapStateToProps, null)(HomePageContainer);
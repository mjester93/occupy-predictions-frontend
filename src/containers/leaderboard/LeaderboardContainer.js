import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import LeaderboardFilterBar from '../../components/leaderboard/LeaderboardFilterBar';
import LeaderboardUsersContainer from './LeaderboardUsersContainer';

const LeaderboardContainer = (prop) => {
    return (
        <Grid id="op-container">
            <Grid.Row stretched>
                <Grid.Column width={16}>
                    <Segment style={{border: '1px solid #00654D', maxHeight: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                        <LeaderboardFilterBar />
                        <hr style={{width: '100%'}}/>
                        <LeaderboardUsersContainer />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default LeaderboardContainer;
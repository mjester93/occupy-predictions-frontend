import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import LeaderboardFilterBarContainer from './LeaderboardFilterBarContainer';
import LeaderboardUsers from './LeaderboardFilterBarContainer';

const LeaderboardContainer = (prop) => {
    return (
        <Grid id="op-container">
            <Grid.Row stretched>
                <Grid.Column width={16}>
                    <Segment style={{border: '1px solid #00654D', maxHeight: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                        <LeaderboardFilterBarContainer />
                        <hr style={{width: '100%'}}/>
                        <LeaderboardUsers />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default LeaderboardContainer;
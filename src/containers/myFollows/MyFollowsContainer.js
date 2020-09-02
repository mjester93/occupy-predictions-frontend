import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';

import MyFollowsFilterBar from '../../components/myFollows/MyFollowsFilterBar';
import MyFollowsPicksContainer from './MyFollowsPicksContainer';

const MyFollowsContainer = () => {
    return (
        <Grid id="op-container">
            <Grid.Row stretched>
                <Grid.Column width={16}>
                    <Segment style={{border: '1px solid black', maxHeight: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
                        <MyFollowsFilterBar />
                        <hr style={{width: '100%'}}/>
                        <MyFollowsPicksContainer />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MyFollowsContainer;
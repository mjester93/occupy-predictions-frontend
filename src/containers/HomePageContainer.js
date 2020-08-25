import React from 'react'
import { Grid } from 'semantic-ui-react'

import HomePageLeftSideContainer from './HomePageLeftSideContainer';
import HomePageRightSideContainer from './HomePageRightSideContainer';

const HomePageContainer = () => {
    return (
        <Grid container>
            <Grid.Row stretched>
                <Grid.Column width={4}>
                    <HomePageLeftSideContainer />
                </Grid.Column>
                <Grid.Column width={12} padded>
                    <HomePageRightSideContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomePageContainer;
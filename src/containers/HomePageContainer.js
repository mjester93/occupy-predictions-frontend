import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import HomePageLeftSideContainer from './HomePageLeftSideContainer';

const HomePageContainer = () => {
    return (
        <Grid container>
            <Grid.Row stretched>
                <Grid.Column width={4}>
                    <HomePageLeftSideContainer />
                </Grid.Column>
                <Grid.Column width={12} padded>
                    <div style={{border: '1px solid black'}}>Hello!</div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        // {/* <HomePageRightSideContainer /> */}
    )
}

export default HomePageContainer;
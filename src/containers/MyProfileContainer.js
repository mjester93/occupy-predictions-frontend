import React from 'react'
import { Grid } from 'semantic-ui-react';

import MyProfileLeftSideContainer from './MyProfileLeftSideContainer';
import MyProfileRightSideContainer from './MyProfileRightSideContainer';

const MyProfileContainer = () => {
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

export default MyProfileContainer
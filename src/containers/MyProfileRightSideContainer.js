import React from 'react';
import { Segment } from 'semantic-ui-react';

import MyProfileFilterBar from '../components/MyProfileFilterBar';
import MyProfileUserPicksContainer from './MyProfileUserPicksContainer';

const MyProfileRightSideContainer = () => {

    return (
        <Segment style={{border: '1px solid #00654D', maxHeight: '1000px', textAlign: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <MyProfileFilterBar />
            <hr style={{width: '100%'}}/>
            <MyProfileUserPicksContainer />
        </Segment>
    )
}

export default MyProfileRightSideContainer;
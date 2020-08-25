import React from 'react'
import { Segment } from 'semantic-ui-react'

import HomePageFilterBar from '../components/HomePageFilterBar';
import HomePageGamesContainer from './HomePageGamesContainer';

const HomePageRightSideContainer = () => {
    return (
        <Segment style={{border: '1px solid black', height: '80vh', textAlign: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <HomePageFilterBar />
            <hr style={{width: '100%'}}/>
            <HomePageGamesContainer />
        </Segment>
    )
}

export default HomePageRightSideContainer;
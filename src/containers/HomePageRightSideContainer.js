import React from 'react'
import { Segment } from 'semantic-ui-react'

import HomePageFilterBar from '../components/HomePageFilterBar';
// import HomePageGamesContainer from './HomePageGamesContainer';

const HomePageRightSideContainer = () => {
    return (
        <Segment style={{border: '1px solid black', height: '80vh', textAlign: 'center'}}>
            <HomePageFilterBar />
            <hr />
            {/* <HomePageGamesContainer /> */}
        </Segment>
    )
}

export default HomePageRightSideContainer;
import React from 'react'
import { Segment } from 'semantic-ui-react'

import HomePageFilterBar from '../components/HomePageFilterBar';
import HomePageGamesContainer from './HomePageGamesContainer';

const HomePageRightSideContainer = () => {
    return (
        <Segment className="home-page-right-side-container">
            <HomePageFilterBar />
            <hr style={{width: '100%'}}/>
            <HomePageGamesContainer />
        </Segment>
    )
}

export default HomePageRightSideContainer;
import React from 'react'
import { Container } from 'semantic-ui-react'

import HomePageLeftSideContainer from './HomePageLeftSideContainer';

const HomePageContainer = () => {
    return (
        <Container>
            <HomePageLeftSideContainer />
            {/* <HomePageRightSideContainer /> */}
        </Container>
    )
}

export default HomePageContainer;
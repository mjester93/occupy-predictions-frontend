import React, { useEffect } from 'react';
import { Segment } from 'semantic-ui-react'

import Game from '../components/Game';

const BASEURL = 'http://localhost:3000'
const GAMESURL = BASEURL + '/games'

const HomePageGamesContainer = () => {

    useEffect(() => {
        fetch(GAMESURL)
        .then(response => response.json())
        .then(console.log)
    })

    return (
        <Segment basic style={{overflowY: 'auto'}}>
            <Game />
            <Game />
            <Game />
        </Segment>
    )

}

export default HomePageGamesContainer;
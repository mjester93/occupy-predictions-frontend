import React, { useEffect } from 'react';

import { Segment } from 'semantic-ui-react'

const BASEURL = 'http://localhost:3000'
const GAMESURL = BASEURL + '/games'

const HomePageGamesContainer = () => {

    useEffect(() => {
        fetch(GAMESURL)
        .then(response => response.json())
        .then(console.log)
    })

    return (
        <Segment basic>
        </Segment>
    )

}

export default HomePageGamesContainer;
import React from 'react'
import { Container } from 'semantic-ui-react'

const HomePageLeftSideContainer = () => {
    return (
        <Container style={{border: '1px solid black', height: '80vh'}}>
            <div className="mini-leaderboard">
                <h4 style={{textAlign: 'center'}}>Mini Leaderboard</h4>
            </div>
            <div className="games-starting-soon"> 
                <h4 style={{textAlign: 'center'}}>Games Starting Soon</h4>
            </div>
            <div className="twitter-feed">
                <a 
                    class="twitter-timeline" 
                    data-lang="en" 
                    data-width="95%" 
                    data-height="500" 
                    href="https://twitter.com/OccupyFantasy?ref_src=twsrc%5Etfw">
                        A Twitter List by TwitterDev
                </a>
            </div>
        </Container>
    )
}

export default HomePageLeftSideContainer;
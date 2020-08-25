import React from 'react'
import { Segment } from 'semantic-ui-react'

const HomePageLeftSideContainer = () => {
    return (
        <Segment style={{border: '1px solid black'}}>
            <div className="mini-leaderboard">
                <h4 style={{textAlign: 'center'}}>Mini Leaderboard</h4>
            </div>
            <hr />
            <div className="games-starting-soon"> 
                <h4 style={{textAlign: 'center'}}>Games Starting Soon</h4>
            </div>
            <hr />
            <div className="twitter-feed">
                <a 
                    className="twitter-timeline" 
                    data-lang="en" 
                    data-width="95%" 
                    data-height="90%" 
                    href="https://twitter.com/OccupyFantasy?ref_src=twsrc%5Etfw">
                        A Twitter List by TwitterDev
                </a>
            </div>
        </Segment>
    )
}

export default HomePageLeftSideContainer;
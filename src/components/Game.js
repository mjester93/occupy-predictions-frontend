import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Game = () => {
    return (
        <Segment>
            <div className="gameLeft">
                <span>Away Team @ Home Team (neutral)</span><br />
                <span>Stadium - City, State</span><br />
                <span>Weather</span><br />
                <span>TV Channels</span>
            </div>
            <div className="gameRight">
                <span>Date/time</span><br />
                <span>Number of picks and %</span><br />
                <span>Betting Odds</span><br />
            </div>
            <Button size='mini'>Make A Pick!</Button>
        </Segment>
    )
}

export default Game
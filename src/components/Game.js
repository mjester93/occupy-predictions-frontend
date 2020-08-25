import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Game = () => {
    return (
        <Segment>
            <span className="game-header">NBA | 08/25/2020 @ 6:30 PM</span>
            <hr />
            <div className="game-left">
                <div className="team-names">
                    <img className="teamLogoImg" alt="utah jazz" src="https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg" />
                    <span class="away-team team">Utah Jazz</span>
                    <br />
                    <img className="teamLogoImg" alt="denver nuggets" src="https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg" />
                    <span class="home-team team">Denver Nuggets</span>
                </div>
                <span>ESPN Wide World of Sports Complex - Reunion, FL</span><br />
                {/* <span>Weather</span><br /> */}
                <span>Channels: TNT</span>
            </div>
            <div className="game-right">
                <span>Number of picks and %</span><br />
                <span>Betting Odds</span><br />
            </div>
            <hr/>
            <Button size='mini'>Make A Pick!</Button>
        </Segment>
    )
}

export default Game
import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Game = (props) => {

    const { game } = props
    const { league, time, stadium, channels } = game

    const header = league.abbreviation + ' | ' + time;
    const fullStadium = stadium.name + ' ' + stadium.city + ', ' + stadium.state;
    const fullChannels = channels.join(', ');

    const neutralVenueSpan = () => {
        return (
            <span className="neutral-game">&nbsp;(neutral)</span>
        )
    }

    return (
        <Segment>
            <h5 className="game-header">{header}</h5>
            <hr />
            <div className="game-left">
                <div className="team-names">
                    <img 
                        className="teamLogoImg" 
                        alt={game['away_global_team']['full_name']} 
                        src={game['away_global_team']['wikipedia_logo_url']} 
                    />
                    <span className="away-team team">{game['away_global_team']['full_name']}</span>
                    <br />
                    <img 
                        className="teamLogoImg" 
                        alt={game['home_global_team']['full_name']}
                        src={game['home_global_team']['wikipedia_logo_url']} 
                    />
                    <span className="home-team team">{game['home_global_team']['full_name']}</span>
                    { game['neutral_venue'] ? neutralVenueSpan() : null}
                </div>
                <span class="stadium">{fullStadium}</span><br />
                {/* <span>Weather</span><br /> */}
                <span class="channels">Channels: {fullChannels}</span>
            </div>
            <div className="game-right">
                {/* <span>Number of picks and %</span><br /> */}
                <h5>Betting Odds</h5><br />
            </div>
            <hr/>
            <Button size='mini'>Make A Pick!</Button>
        </Segment>
    )
}

export default Game
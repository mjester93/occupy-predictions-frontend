import React from 'react'
import { Button, Segment, Table } from 'semantic-ui-react'

const Game = (props) => {

    const { game } = props
    const { league, time, stadium, channels, odds, weather } = game

    const header = league.abbreviation + ' | ' + time;
    const fullStadium = stadium.name + ' ' + stadium.city + ', ' + stadium.state;
    const fullChannels = channels.join(', ');

    const neutralVenueSpan = () => {
        return (
            <span className="neutral-game">&nbsp;(neutral)</span>
        )
    }

    const formatPositiveNumber = (num) => {
        if (num > 0) {
            return "+" + num
        } 
        return num
    }

    const weatherData = () => {
        if (weather.description === null) {
            return null
        }

        return (
            <span className="weather">
                Weather: {weather.description}
            </span>
        )
    }

    const oddsTable = () => {
        return (
            <Table compact basic='very' className="game-odds-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Spread</Table.HeaderCell>
                        <Table.HeaderCell>ML</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body className="game-odds-table-body">
                    <Table.Row>
                        <Table.Cell>
                            <img 
                                className="teamLogoImg" 
                                alt={game['away_global_team']['full_name']}
                                src={game['away_global_team']['wikipedia_logo_url']} 
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['away_point_spread']) }
                            </span>
                            &nbsp;
                            <span className="juice">
                                { formatPositiveNumber(odds['away_point_spread_price']) }
                            </span>
                            </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['away_moneyline']) }
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                o{odds['total_points']}
                            </span>
                            &nbsp;
                            <span className="juice">
                                { formatPositiveNumber(odds['total_points_over_price']) }
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <img 
                                className="teamLogoImg" 
                                alt={game['home_global_team']['full_name']}
                                src={game['home_global_team']['wikipedia_logo_url']} 
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['home_point_spread']) }
                            </span>
                            &nbsp;
                            <span className="juice">
                                { formatPositiveNumber(odds['home_point_spread_price']) }
                            </span>
                            </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['home_moneyline']) }
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                u{odds['total_points']}
                            </span>
                            &nbsp;
                            <span className="juice">
                                { formatPositiveNumber(odds['total_points_under_price']) }
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
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
                <br />
                {weatherData()}
            </div>
            <div className="game-right">
                {oddsTable()}
            </div>
            <hr/>
            <Button size='mini'>Make A Pick!</Button>
        </Segment>
    )
}

export default Game
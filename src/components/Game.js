import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, Icon, Form, Modal, Popup, Segment, Table } from 'semantic-ui-react'

const Game = (props) => {

    const [selectionModalOpen, setSelectionModalOpen] = useState(false)
    const [totalPicks, setTotalPicks] = useState(props.game.user_picks_summary.total)

    const { game, loggedIn } = props
    const { league, stadium, channels, odds, weather } = game

    const header = `${league.abbreviation}  |  ${game['formatted_time']}  ET | ${totalPicks} total picks`;
    const fullStadium = stadium.name + ' ' + stadium.city + ', ' + stadium.state;
    const fullChannels = channels ? channels.join(', ') : null;

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
                Weather: {weather.description}, {weather['wind_chill']} °F
            </span>
        )
    }

    const pointSpreadPopupText = () => {
        let favTeam;
        let dogTeam;
        let favOdds;
        if (game.odds.favorited_side === 'AWAY') {
            favTeam = game.away_global_team.full_name;
            dogTeam = game.home_global_team.full_name;
            favOdds = game.odds.away_point_spread;
        } else {
            favTeam = game.home_global_team.full_name;
            dogTeam = game.away_global_team.full_name;
            favOdds = game.odds.home_point_spread;
        }

        return `The spread is the method used to equalize two teams. This is achieved by requiring the better team to win by a predetermined number of points in order for a prediction on that team to win. (e.g. The ${favTeam} are favored by ${favOdds} points over the ${dogTeam}, a prediction on the ${favTeam} Point Spread will be a winner if the ${favTeam} beat the ${dogTeam} by at least ${Math.abs(favOdds)} points)`
    }

    const moneylinePopupText = () => {
        let favTeam;
        let dogTeam;
        if (game.odds.favorited_side === 'AWAY') {
            favTeam = game.away_global_team.full_name;
            dogTeam = game.home_global_team.full_name;
        } else {
            favTeam = game.home_global_team.full_name;
            dogTeam = game.away_global_team.full_name;
        }

        return `The moneyline (ML) is a prediction on which team will win the game. A prediction on the ${favTeam} will be a winner if the ${favTeam} are ahead of the ${dogTeam} after the game.`
    }

    const totalPopupText = () => {
        const total = game.odds.total_points;

        return `This is a prediction on the total number of points scored by both teams in the game. A pick on over ${total} would be a winner if the total number of points scored by both teams in the game is ${total} or more.`
    }

    const oddsTable = () => {
        return (
            <Table compact basic='very' className="game-odds-table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>
                            Spread&nbsp;<Popup content={pointSpreadPopupText()} trigger={<Icon name='question circle' />} />
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            ML&nbsp;<Popup content={moneylinePopupText()} trigger={<Icon name='question circle' />} />
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Total&nbsp;<Popup content={totalPopupText()} trigger={<Icon name='question circle' />} />
                        </Table.HeaderCell>
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
                            &nbsp;
                            <span className="bet-percentage">
                                {game['user_picks_summary']['away_spread_percentage'] 
                                ? `(${game['user_picks_summary']['away_spread_percentage']})`
                                : null
                                }
                            </span>
                            </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['away_moneyline']) }
                            </span>
                            &nbsp;
                            <span className="bet-percentage">
                                {game['user_picks_summary']['away_moneyline_percentage'] 
                                ? `(${game['user_picks_summary']['away_moneyline_percentage']})`
                                : null
                                }
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
                            &nbsp;
                            <span className="bet-percentage">
                            {game['user_picks_summary']['over_percentage'] 
                                ? `(${game['user_picks_summary']['over_percentage']})`
                                : null
                                }
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
                            &nbsp;
                            <span className="bet-percentage">
                                {game['user_picks_summary']['home_spread_percentage'] 
                                ? `(${game['user_picks_summary']['home_spread_percentage']})`
                                : null
                                }
                            </span>
                            </Table.Cell>
                        <Table.Cell>
                            <span className="odd">
                                { formatPositiveNumber(odds['home_moneyline']) }
                            </span>
                            &nbsp;
                            <span className="bet-percentage">
                                {game['user_picks_summary']['home_moneyline_percentage'] 
                                ? `(${game['user_picks_summary']['home_moneyline_percentage']})`
                                : null
                                }
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
                            &nbsp;
                            <span className="bet-percentage">
                                {game['user_picks_summary']['under_percentage'] 
                                ? `(${game['user_picks_summary']['under_percentage']})`
                                : null
                                }
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }

    const submitSelectionForm = (event) => {
        event.preventDefault();

        const SUBMITPICK_URL = 'http://localhost:3000/user_picks';
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_token: localStorage.getItem('token'),
                global_game_id: game['global_game_id'],
                selection: event.target.selection.value,
                confidence: event.target.confidence.value,
                comments: event.target.comments.value
            })
        }

        fetch(SUBMITPICK_URL, options)
        .then(response => response.json())
        .then((userPick) => {
            alert('Your pick has been submitted!');
            setSelectionModalOpen(false);
            setTotalPicks(totalPicks + 1);
            // props.dispatch({ type: 'UPDATE_GAME_PICK_COUNT' })
        })
        .catch(error => alert(error))
    }

    const makeAPickModal = () => {
        return (
            <Modal
                size='tiny'
                onClose={() => setSelectionModalOpen(false)}
                onOpen={() => setSelectionModalOpen(true)}
                open={selectionModalOpen}
                trigger={<Button size='mini' className='occupy-green-button'>Make A Pick!</Button>}
            >
                <Modal.Header>
                    {game['away_global_team']['full_name'] + ' @ ' + game['home_global_team']['full_name']}
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form id='user-pick-form' onSubmit={(event) => submitSelectionForm(event)}>
                            <Form.Field>
                                <label htmlFor='selection'>Make Your Selection:</label>
                                <select name='selection' id='user-pick-form-selection' form='user-pick-form'>
                                    <option value={game['away_global_team']['global_team_id'] + '_ML_0_' + odds['away_moneyline']}>
                                        {game['away_global_team'].key + ' ML ' + formatPositiveNumber(odds['away_moneyline'])}
                                    </option>
                                    <option value={game['home_global_team']['global_team_id'] + '_ML_0_' + odds['home_moneyline']}>
                                        {game['home_global_team'].key + ' ML ' + formatPositiveNumber(odds['home_moneyline'])}
                                    </option>
                                    <option value={game['away_global_team']['global_team_id'] + '_SPREAD_' + odds['away_point_spread'] + '_' + odds['away_point_spread_price']}>
                                        {game['away_global_team'].key + ' ' + formatPositiveNumber(odds['away_point_spread']) + ' ' + formatPositiveNumber(odds['away_point_spread_price']) }
                                    </option>
                                    <option value={game['home_global_team']['global_team_id'] + '_SPREAD_' + odds['home_point_spread'] + '_' + odds['home_point_spread_price']}>
                                    {game['home_global_team'].key + ' ' + formatPositiveNumber(odds['home_point_spread']) + ' ' + formatPositiveNumber(odds['home_point_spread_price']) }
                                    </option>
                                    <option value={game['away_global_team']['global_team_id'] + '_OVER_' + odds['total_points'] + '_' + odds['total_points_over_price']}>
                                        {'OVER ' + odds['total_points'] + ' ' + formatPositiveNumber(odds['total_points_over_price']) }
                                    </option>
                                    <option value={game['home_global_team']['global_team_id'] + '_UNDER_' + odds['total_points'] + '_' + odds['total_points_under_price']}>
                                        {'UNDER ' + odds['total_points'] + ' ' + formatPositiveNumber(odds['total_points_under_price']) }
                                    </option>
                                </select>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='confidence'>How confident are you? (1 - worst, 5 - best)</label>
                                <input 
                                    name='confidence' 
                                    id='user-pick-form-confidence' 
                                    form='user-pick-form' 
                                    type='number' min='1' max='5' step='1'
                                    required
                                ></input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='comments'>Comments?</label>
                                <textarea name='comments' form='user-pick-form' required></textarea>
                            </Form.Field>
                                <Button color='red' onClick={() => setSelectionModalOpen(false)}>Cancel</Button>
                                <Button type='submit' className='occupy-green-button'>Submit</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
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
                <span className="stadium">{fullStadium}</span><br />
                <span className="channels">Channels: {fullChannels}</span>
                <br />
                {weatherData()}
            </div>
            <div className="game-right">
                {oddsTable()}
            </div>
            <hr/>
            { 
                loggedIn 
                ? makeAPickModal() 
                : <Button href='/login' size='mini' className='occupy-green-button'>Sign In To Make A Pick!</Button>
            }
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.usersReducer.loggedIn,
    }
}

export default connect(mapStateToProps, null)(Game)
import React from 'react'
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

const HomePageLeftSideContainer = (props) => {

    const { mini, leaderboardLoading, gamesStartingSoon, gamesLoading } = props;

    const leaderboard = () => {
        return (
            mini.map(
                (user) => {return (
                    <li key={user.id}>
                        <a href={`/user/${user.id}`}>{user.username} -- {user.records.total}</a>
                    </li>
                )}
            )
        )
    }

    const renderMiniGames = () => {
        return (
            <Segment.Group>
                {gamesStartingSoon.map(game => {
                    return (
                        <Segment compact className="mini-game">
                            <div className="mini-game-top-header">
                                <span>{game.mini_header}</span>
                                <span style={{float: 'right'}}>{game.channels[0]}</span>
                            </div>
                            <hr style={{margin: 'auto'}} />
                            <div>
                                <img 
                                    className="teamLogoImg" 
                                    alt={game['away_global_team']['full_name']} 
                                    src={game['away_global_team']['wikipedia_logo_url']} 
                                />
                                <span className="away-team team">{game.away_global_team.key}</span>
                                <span style={{float: 'right', lineHeight: '25px'}} className="away-team team">{game.odds.mini_odds_top}</span>
                                <br />
                                <img 
                                    className="teamLogoImg" 
                                    alt={game['home_global_team']['full_name']} 
                                    src={game['home_global_team']['wikipedia_logo_url']} 
                                />
                                <span className="home-team team">{game.home_global_team.key}</span>
                                <span style={{float: 'right', lineHeight: '25px'}}>{game.odds.mini_odds_bottom}</span>
                            </div>
                        </Segment>
                    )
                })}
            </Segment.Group>
        )
    }

    return (
        <Segment className="home-page-left-side-container">
            <div className="mini-leaderboard">
                <h4 style={{textAlign: 'center'}}>Mini Leaderboard</h4>
            <span style={{textAlign: 'center', display: 'block'}}>Most wins the last 30 days</span>
            { leaderboardLoading ? <p>loading...</p> : <ol>{leaderboard()}</ol>}
            </div>
            <hr />
            <div className="games-starting-soon"> 
                <h4 style={{textAlign: 'center'}}>Games Starting Soon</h4>
                <span style={{textAlign: 'center', display: 'block'}}>Less than 60 minutes!</span>
                { gamesLoading ? <p>loading...</p> : renderMiniGames()}
            </div>
            <hr />
            <div className="twitter-feed">
                <a 
                    className="twitter-timeline" 
                    data-lang="en" 
                    data-width="95%" 
                    data-height="350" 
                    href="https://twitter.com/OccupyFantasy?ref_src=twsrc%5Etfw">
                        A Twitter List by TwitterDev
                </a>
            </div>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        mini: state.leaderboardReducer.mini,
        gamesStartingSoon: state.gamesReducer.gamesStartingSoon,
        gamesLoading: state.gamesReducer.loading,
        leaderboardLoading: state.leaderboardReducer.loading
    }
}

export default connect(mapStateToProps, null)(HomePageLeftSideContainer);
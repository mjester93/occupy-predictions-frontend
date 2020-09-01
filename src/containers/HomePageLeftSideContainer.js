import React from 'react'
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

const HomePageLeftSideContainer = (props) => {

    const { mini, leaderboardLoading, gamesStartingSoon, gamesLoading } = props;

    const leaderboard = () => {
        console.log(props)
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
                            <span>{game.mini_header}</span>
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
                    data-height="750" 
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
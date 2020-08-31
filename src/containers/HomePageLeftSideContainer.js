import React from 'react'
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

const HomePageLeftSideContainer = (props) => {

    const { mini, leaderboardLoading } = props;

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

    return (
        <Segment style={{border: '1px solid black'}}>
            <div className="mini-leaderboard">
                <h4 style={{textAlign: 'center'}}>Mini Leaderboard</h4>
            <span style={{textAlign: 'center', display: 'block'}}>Most wins the last 30 days</span>
            { leaderboardLoading ? <p>loading...</p> : <ol>{leaderboard()}</ol>}
            </div>
            <hr />
            <div className="games-starting-soon"> 
                <h4 style={{textAlign: 'center'}}>Games Starting Soon</h4>
                <span style={{textAlign: 'center', display: 'block'}}>Less than 60 minutes!</span>
            </div>
            <hr />
            <div className="twitter-feed">
                <a 
                    className="twitter-timeline" 
                    data-lang="en" 
                    data-width="95%" 
                    data-height="500" 
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
        leaderboardLoading: state.leaderboardReducer.loading
    }
}

export default connect(mapStateToProps, null)(HomePageLeftSideContainer);
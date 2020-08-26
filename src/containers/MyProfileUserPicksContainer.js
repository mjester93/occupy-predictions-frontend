import React from 'react'
import { Segment } from 'semantic-ui-react'

import MyProfilePick from '../components/MyProfilePick';

const exampleUserPicks = [
    {id: 1, league: 'NFL', eventDate: '09/10/2020', eventName: 'Kansas City Chiefs @ Houston Texans', pick: 'Kansas City Chiefs', result: 'PENDING'},
    {id: 1, league: 'MLB', eventDate: '08/20/2020', eventName: 'Detroit Tigers @ Chicago White Sox', pick: 'Chicago White Sox', result: 'WIN'}
]

const MyProfileUserPicksContainer = (props) => {

    const renderMyProfilePicks = () => {
        return exampleUserPicks.map(
            userPick => {return (
                <MyProfilePick pick={userPick} />
            )}
        )
    }

    return (
        <Segment basic style={{overflowY: 'auto'}}>
            {/* {props.loading ? renderLoading() : renderGames()} */}
            {renderMyProfilePicks()}
        </Segment>
    )
}

export default MyProfileUserPicksContainer;
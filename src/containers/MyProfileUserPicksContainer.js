import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'

import MyProfilePick from '../components/MyProfilePick';

const exampleUserPicks = [
    {id: 11, league: 'NFL', eventDate: '09/10/2020', eventName: 'KC @ HOU', pick: 'KC -10.5', result: 'PENDING', comment: 'I love this pick!'},
    {id: 12, league: 'MLB', eventDate: '08/20/2020', eventName: 'DET @ CWS', pick: 'CWS -115', result: 'WIN', comment: 'It was a close one!'}
]

const MyProfileUserPicksContainer = (props) => {

    const renderMyProfilePicks = () => {
        return (
            <Fragment>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>League</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Event</Table.HeaderCell>
                        <Table.HeaderCell>Pick</Table.HeaderCell>
                        <Table.HeaderCell>Result</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.loading 
                        ? null
                        : props.filteredUserPicks.map(up => {return <MyProfilePick key={up.id} pick={up} />})
                    }
                </Table.Body>
            </Fragment>
        )
    }

    return (
        <Segment basic style={{overflowY: 'auto'}}>
            <Table id="my-profile-picks-table" compact='very' basic='very'>
                {/* {props.loading ? renderLoading() : renderGames()} */}
                {renderMyProfilePicks()}
            </Table>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        filteredUserPicks: state.usersReducer.user.filteredUserPicks,
        loading: state.usersReducer.loading
    }
}

export default connect(mapStateToProps, null)(MyProfileUserPicksContainer);
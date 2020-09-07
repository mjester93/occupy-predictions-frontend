import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react'

import LeaderboardUser from '../../components/leaderboard/LeaderboardUser';

const LeaderboardUsersContainer = (props) => {

    const { loading, full } = props;

    const leaderboardUsersTableHeader = () => {
        return (
            <Table compact basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Record</Table.HeaderCell>
                        <Table.HeaderCell>Win%</Table.HeaderCell>
                        <Table.HeaderCell>Last Pick</Table.HeaderCell>
                        <Table.HeaderCell>Next Pick</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { loading ? null : renderAllUsers() }
                </Table.Body>
            </Table>
        )
    }

    const renderAllUsers = () => {
        return (
            full.map(
                (user, index) => { return (
                    <LeaderboardUser key={user.id} user={user} rank={index} />
                ) }
            )
        )
    }

    return (
        <Fragment>
            {leaderboardUsersTableHeader()}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.leaderboardReducer.loading,
        full: state.leaderboardReducer.full
    }
}

export default connect(mapStateToProps, null)(LeaderboardUsersContainer);
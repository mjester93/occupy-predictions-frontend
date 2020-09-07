import React, { Fragment } from 'react';
import { Table } from 'semantic-ui-react'

const LeaderboardUsersContainer = () => {

    const leaderboardUsersTableHeader = () => {
        return (
            <Table compact basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Record</Table.HeaderCell>
                        <Table.HeaderCell>Win%</Table.HeaderCell>
                        <Table.HeaderCell>Next Pick</Table.HeaderCell>
                        <Table.HeaderCell>Last Pick</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    
                </Table.Body>
            </Table>
        )
    }

    const leaderboardUsers = () => {
        return (
            <div></div>
        )
    }

    return (
        <Fragment>
            {leaderboardUsersTableHeader()}
        </Fragment>
    )
}

export default LeaderboardUsersContainer;
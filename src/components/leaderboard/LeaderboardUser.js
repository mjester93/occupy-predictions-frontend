import React, { Fragment } from 'react';
import { Icon, Table } from 'semantic-ui-react';

const LeaderboardUser = (props) => {

    const { rank, user } = props;

    const record = () => {
        return user.wins_losses_pushes_last_x_days.join('-')
    }

    const winPercentage = () => {
        return (100 * user.wins_losses_pushes_last_x_days[0] / (user.wins_losses_pushes_last_x_days[0] + user.wins_losses_pushes_last_x_days[1])).toFixed(2) + '%'
    }

    const recentPick = () => {
        if (user.most_recent_pick.result === 'WIN') {
            return (
                <Fragment>
                    <Icon color='green' name='check' />
                    <span>{user.most_recent_pick.pick}</span>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Icon color='red' name='x' />
                    <span>{user.most_recent_pick.pick}</span>
                </Fragment>
            )
        }
    }

    return (
        <Table.Row>
            <Table.Cell>{rank + 1}</Table.Cell>
            <Table.Cell><a href={`/user/${user.id}`}>{user.username}</a></Table.Cell>
            <Table.Cell>{record()}</Table.Cell>
            <Table.Cell>{winPercentage()}</Table.Cell>
            <Table.Cell>{recentPick()}</Table.Cell>
            <Table.Cell>{user.upcoming_pick}</Table.Cell>
        </Table.Row>
    )
}

export default LeaderboardUser;
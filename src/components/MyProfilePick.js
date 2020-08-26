import React from 'react'
import { Table } from 'semantic-ui-react'

const MyProfilePick = (props) => {

    const { pick } = props
    
    return (
        <Table.Row>
            <Table.Cell>{pick.league}</Table.Cell>
            <Table.Cell>{pick.eventDate}</Table.Cell>
            <Table.Cell>{pick.eventName}</Table.Cell>
            <Table.Cell>{pick.pick}</Table.Cell>
            <Table.Cell>{pick.result}</Table.Cell>
            <Table.Cell>{pick.comment}</Table.Cell>
        </Table.Row>
    )
}

export default MyProfilePick;
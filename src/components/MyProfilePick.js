import React from 'react'
import { Table } from 'semantic-ui-react'

const MyProfilePick = (props) => {

    const { pick } = props
    
    return (
        <Table.Row>
            <Table.Cell style={{textAlign: 'center'}}>{pick.league}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{pick['event_date']}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{pick['formatted_event']}</Table.Cell>
            <Table.Cell style={{textAlign: 'center'}}>{pick.pick}</Table.Cell>
            <Table.Cell style={{textAlign: 'center', whiteSpace: 'nowrap'}}>{pick.result}</Table.Cell>
            <Table.Cell style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{pick.comment}</Table.Cell>
        </Table.Row>
    )
}

export default MyProfilePick;
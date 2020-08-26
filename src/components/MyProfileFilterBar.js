import React from 'react'
import { Segment, Select } from 'semantic-ui-react'

const sportSelections = [
    { key: 'all', value: 'all', text: 'All'},
    { key: 'mlb', value: 'mlb', text: 'MLB'},
    { key: 'nba', value: 'nba', text: 'NBA'},
    { key: 'nhl', value: 'nhl', text: 'NHL'},
    { key: 'nfl', value: 'nfl', text: 'NFL'}
]

const pickStatus = [
    { key: 'all', value: 'all', text: 'All' },
    { key: 'pending', value: 'pending', text: 'Pending' },
    { key: 'win', value: 'win', text: 'Win' },
    { key: 'loss', value: 'loss', text: 'Loss' },
    { key: 'tie', value: 'tie', text: 'Tie' },
]

const sortBySelection = [
    { key: 'showAll', value: 'showAll', text: 'None'},
    { key: 'soonDesc', value: 'soonDesc', text: 'Starting Soon Desc'}
]

const MyProfileFilterBar = () => {
    return (
        <Segment basic>
            <span>Sport: </span>
            <Select style={{minWidth: '10px'}} value='all' text='All' options={sportSelections} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Status: </span>
            <Select style={{minWidth: '100px'}} value='all' text='All' options={pickStatus} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Sort By: </span>
            <Select style={{minWidth: '10px'}} value='showAll' text='None' options={sortBySelection} />
        </Segment>
    )
}

export default MyProfileFilterBar;
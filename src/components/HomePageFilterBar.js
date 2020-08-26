import React from 'react'
import { Segment, Select } from 'semantic-ui-react'

const sportSelections = [
    { key: 'all', value: 'all', text: 'All'},
    { key: 'mlb', value: 'mlb', text: 'MLB'},
    { key: 'nba', value: 'nba', text: 'NBA'},
    { key: 'nhl', value: 'nhl', text: 'NHL'},
    { key: 'nfl', value: 'nfl', text: 'NFL'}
]

const sortBySelection = [
    { key: 'showAll', value: 'showAll', text: 'None'},
    { key: 'soonDesc', value: 'soonDesc', text: 'Starting Soon Desc'},
    { key: 'popularAsc', value: 'popularAsc', text: 'Popular Asc'},
    { key: 'popularDesc', value: 'popularDesc', text: 'Popular Desc'},
]


const HomePageFilterBar = () => {
    return (
        <Segment basic>
            <span>Sport: </span>
            <Select value='all' text='All' options={sportSelections} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Sort By: </span>
            <Select value='showAll' text='None' options={sortBySelection} />
        </Segment>
    )
}

export default HomePageFilterBar
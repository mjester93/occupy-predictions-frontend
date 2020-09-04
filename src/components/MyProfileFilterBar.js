import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Select } from 'semantic-ui-react';

import { filterUserPicksBySport } from '../actions/filterUserPicksBySport';
import { filterUserPicksByStatus } from '../actions/filterUserPicksByStatus';


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
    { key: 'lose', value: 'lose', text: 'Lose' },
    { key: 'push', value: 'push', text: 'Push' },
]

const MyProfileFilterBar = (props) => {

    const { userPicks } = props;

    const [filterSelection, changeFilterSelection] = useState('All');
    const [filterStatus, changeFilterStatus] = useState('All');

    const handleFilterOnChange = (event) => {
        const sport = event.target.textContent;
        props.dispatch( filterUserPicksBySport({sport, picks: userPicks}) );
        changeFilterSelection(sport);
    }

    const handleStatusOnChange = (event) => {
        const status = event.target.textContent;
        props.dispatch( filterUserPicksByStatus({status, picks: userPicks}) );
        changeFilterStatus(status);
    }

    return (
        <Segment basic>
            <span>Sport: </span>
            <Select 
                style={{minWidth: '10px'}} 
                value={filterSelection} 
                text={filterSelection} 
                options={sportSelections}
                onChange={(event) => {handleFilterOnChange(event)}} 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Status: </span>
            <Select 
                style={{minWidth: '100px'}} 
                value={filterStatus} 
                text={filterStatus} 
                options={pickStatus} 
                onChange = {(event) => {handleStatusOnChange(event)}}
            />
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        userPicks: state.usersReducer.user.user_picks,
        filteredUserPicks: state.usersReducer.user.filteredUserPicks
    }
}

export default connect(mapStateToProps, null)(MyProfileFilterBar);
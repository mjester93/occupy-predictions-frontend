import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Select } from 'semantic-ui-react';

import { filterUserPicksBySport } from '../actions/filterUserPicksBySport';

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

const dateSelections = [
    { key: 'all', value: 'all', text: 'All' },
    { key: 'this-week', value: 'this-week', text: 'This Week' },
    { key: 'this-month', value: 'this-month', text: 'This Month' },
    { key: 'this-year', value: 'this-year', text: 'This Year' },
]

const MyProfileFilterBar = (props) => {

    const { userPicks } = props;

    const [filterSelection, changeFilterSelection] = useState('All');
    const [filterStatus, changeFilterStatus] = useState('All');
    const [filterDate, changeDate] = useState('All')

    const handleFilterOnChange = (event, type) => {
        const textContent = event.target.textContent;
        let sport = filterSelection;
        let status = filterStatus;
        let date = filterDate;

        switch (type) {
            case 'sport':
                sport = textContent;
                changeFilterSelection(event.target.textContent);
                break;

            case 'status':
                status = textContent;
                changeFilterStatus(event.target.textContent);
                break;

            case 'date':
                date = textContent
                changeDate(event.target.textContent);
                break;
        
            default:
                break;
        }

        props.dispatch( filterUserPicksBySport({sport, status, date, picks: userPicks}) );
    }

    return (
        <Segment basic>
            <span className="occupy-green-text filter-bar">Sport: </span>
            <Select 
                style={{width: '10%'}} 
                value={filterSelection} 
                text={filterSelection} 
                options={sportSelections}
                onChange={(event) => {handleFilterOnChange(event, "sport")}} 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="occupy-green-text filter-bar">Status: </span>
            <Select 
                style={{width: '10%'}} 
                value={filterStatus} 
                text={filterStatus} 
                options={pickStatus} 
                onChange = {(event) => {handleFilterOnChange(event, "status")}}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="occupy-green-text filter-bar">Date Range: </span>
            <Select 
                style={{width: '10%'}} 
                value={filterDate} 
                text={filterDate} 
                options={dateSelections} 
                onChange = {(event) => {handleFilterOnChange(event, 'date')}}
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
import React, { useState } from 'react'
import { Select } from 'semantic-ui-react';

// import filterLeaderboard from '../../actions/leaderboard/filterLeaderboard';

const sportSelections = [
    { key: 'all', value: 'all', text: 'All'},
    { key: 'mlb', value: 'mlb', text: 'MLB'},
    { key: 'nba', value: 'nba', text: 'NBA'},
    { key: 'nhl', value: 'nhl', text: 'NHL'},
    { key: 'nfl', value: 'nfl', text: 'NFL'}
]

const dateSelections = [
    { key: 'all', value: 'all', text: 'All' },
    { key: 'this-week', value: 'this-week', text: 'This Week' },
    { key: 'this-month', value: 'this-month', text: 'This Month' },
    { key: 'this-year', value: 'this-year', text: 'This Year' },
]

const LeaderboardFilterBar = (props) => {

    const [filterSelection, changeSportSelection] = useState('All');
    const [filterDate, changeDate] = useState('All')

    const handleFilterOnChange = (event, type) => {
        const textContent = event.target.textContent;
        let sport = filterSelection;
        let date = filterDate;

        switch (type) {
            case 'sport':
                sport = textContent;
                changeSportSelection(event.target.textContent);
                break;

            case 'date':
                date = textContent;
                changeDate(event.target.textContent);
        
            default:
                break;
        }

        // props.dispatch( filterLeaderboard(sport, date) )
    }

    return (
        <div>
            <p>
                The leaderboard will show users who have more wins than losses, sorting by the number of wins.
                 You can use the dropdown filters below to filter by sport, or by a date range.
                 For the 'Last Pick' column, a checkmark will be placed if the last pick was a win, or a
                 red X will be placed if it is a loss.
            </p>
            <br />
            <span className="occupy-green-text filter-bar">Sport: </span>
            <Select 
                value={filterSelection} 
                text={filterSelection} 
                options={sportSelections} 
                onChange={ event => {handleFilterOnChange(event, 'sport')} } 
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
        </div>
    )
}

export default LeaderboardFilterBar;
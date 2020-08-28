import React, { useState } from 'react';
import { Segment, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterBySport } from '../actions/filterGames';

const sportSelections = [
    { key: 'all', value: 'all', text: 'All'},
    { key: 'mlb', value: 'mlb', text: 'MLB'},
    { key: 'nba', value: 'nba', text: 'NBA'},
    { key: 'nhl', value: 'nhl', text: 'NHL'},
    { key: 'nfl', value: 'nfl', text: 'NFL'}
]

const sortBySelections = [
    { key: 'showAll', value: 'showAll', text: 'None'},
    { key: 'soonDesc', value: 'soonDesc', text: 'Starting Soon Desc'},
    { key: 'popularAsc', value: 'popularAsc', text: 'Popular Asc'},
    { key: 'popularDesc', value: 'popularDesc', text: 'Popular Desc'},
]


const HomePageFilterBar = (props) => {

    const [filterSelection, changeFilterSelection] = useState('All');
    const [sortBySelection, changeSortBySelection] = useState('None');

    const { games } = props;

    const handleFilterOnChange = (event) => {
        const sport = event.target.textContent;
        props.dispatch( filterBySport({sport, games}) );
        changeFilterSelection(sport);
    }

    const handleSortByOnChange = (event) => {
        const sortBy = event.target.textContent;
        // props.dispatch ( sortBySport({}) )
        changeSortBySelection(sortBy);
    }

    return (
        <Segment basic>
            <span>Sport: </span>
            <Select 
                value={filterSelection} 
                text={filterSelection} 
                options={sportSelections} 
                onChange={ (event) => {handleFilterOnChange(event)} } 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Sort By: </span>
            <Select 
                value={sortBySelection} 
                text={sortBySelection} 
                options={sortBySelections} 
                onChange={handleSortByOnChange} 
            />
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.gamesReducer.games,
        filteredGames: state.gamesReducer.filteredGames
    }
}

export default connect(mapStateToProps, null)(HomePageFilterBar);
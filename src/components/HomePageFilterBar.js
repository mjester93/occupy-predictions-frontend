import React, { useState } from 'react';
import { Segment, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterBySport } from '../actions/filterGames';
import { sortByGames } from '../actions/sortByGames';

const sportSelections = [
    { key: 'all', value: 'all', text: 'All'},
    { key: 'mlb', value: 'mlb', text: 'MLB'},
    { key: 'nba', value: 'nba', text: 'NBA'},
    { key: 'nhl', value: 'nhl', text: 'NHL'},
    { key: 'nfl', value: 'nfl', text: 'NFL'}
]

const sortBySelections = [
    { key: 'soonDesc', value: 'soonDesc', text: 'Starting Soon Desc'},
    { key: 'popularAsc', value: 'popularAsc', text: 'Popular Asc'}
]


const HomePageFilterBar = (props) => {

    const [filterSelection, changeFilterSelection] = useState('All');
    const [sortBySelection, changeSortBySelection] = useState('None');

    const { games, filteredGames } = props;

    const handleFilterOnChange = (event) => {
        const sport = event.target.textContent;
        props.dispatch( filterBySport({sport, games}) );
        changeFilterSelection(sport);
    }

    const handleSortByOnChange = (event) => {
        const sortBy = event.target.textContent;
        props.dispatch({type: "SORT_GAMES", sortBy, filteredGames})
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
                onChange={(event) => {handleSortByOnChange(event)}} 
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
import React, { useState } from 'react';
import { Segment, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterHomePageGames } from '../actions/filterHomePageGames';

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
    const [sortBySelection, changeSortBySelection] = useState('Starting Soon Desc');

    const { games, filteredGames } = props;

    const handleFilterOnChange = (event, type) => {
        const textContent = event.target.textContent;
        let sport = filterSelection;
        let sortBy = sortBySelection;

        switch (type) {
            case 'sport':
                sport = textContent;
                changeFilterSelection(sport);
                break;

            case 'sort-by':
                sortBy = textContent;
                changeSortBySelection(sortBy);
        
            default:
                break;
        }

        props.dispatch( filterHomePageGames({sport, sortBy, games}) );
    }

    return (
        <Segment basic>
            <span className="occupy-green-text filter-bar">Sport: </span>
            <Select 
                value={filterSelection} 
                text={filterSelection} 
                options={sportSelections} 
                onChange={ event => {handleFilterOnChange(event, "sport")} } 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="occupy-green-text filter-bar">Sort By: </span>
            <Select 
                value={sortBySelection} 
                text={sortBySelection} 
                options={sortBySelections} 
                onChange={ event => {handleFilterOnChange(event, "sort-by")} }
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
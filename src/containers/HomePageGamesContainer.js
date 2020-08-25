import React from 'react';
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

import Game from '../components/Game';

const HomePageGamesContainer = (props) => {

    const renderGames = () => {
        return props.games.map(game => {
            return (
                <Game 
                    key={game['global_game_id']} 
                    game={game}
                />
            )
        })
    }

    return (
        <Segment basic style={{overflowY: 'auto'}}>
            {renderGames()}
        </Segment>
    )

}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, null)(HomePageGamesContainer);
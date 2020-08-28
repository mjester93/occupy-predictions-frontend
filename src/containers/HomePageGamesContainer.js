import React from 'react';
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';

import Game from '../components/Game';

const HomePageGamesContainer = (props) => {

    const renderGames = () => {
        return props.filteredGames.map(game => {
            return (
                <Game 
                    key={game['global_game_id']} 
                    game={game}
                />
            )
        })
    }

    const renderLoading = () => {
        return (
            <div>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </div>
        )
    }

    return (
        <Segment basic style={{overflowY: 'auto'}}>
            {props.loading ? renderLoading() : renderGames()}
        </Segment>
    )

}

const mapStateToProps = (state) => {
    return {
        filteredGames: state.gamesReducer.filteredGames,
        loading: state.gamesReducer.loading
    }
}

export default connect(mapStateToProps, null)(HomePageGamesContainer);
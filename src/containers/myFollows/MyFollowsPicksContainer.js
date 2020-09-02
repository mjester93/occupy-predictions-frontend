import React, { Fragment, useState } from 'react'
import { Dimmer, Image, Segment, Table, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import MyFollowsPick from '../../components/myFollows/MyFollowsPick';
import fetchMyFollowsPicks from '../../actions/fetchMyFollowsPicks';

const MyFollowsPicksContainer = (props) => {

    useState(() => {
        props.dispatch(fetchMyFollowsPicks())
    })

    const renderFollowerPicks = () => {
        if (props.filteredPicks.length === 0) {
            return (
                <span>You don't follow anyone at this time</span>
            )
        }

        return props.filteredPicks.map(up => {return <MyFollowsPick key={up.id} pick={up} />})
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

    const renderMyFollowsPicks = () => {
        return (
            <Fragment>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell style={{width: '200px'}}>Username</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '50px'}}>League</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '100px'}}>Date</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '100px'}}>Event</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '150px'}}>Pick</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '100px'}}>Result</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.loading 
                        ? renderLoading()
                        : renderFollowerPicks()
                    }
                </Table.Body>
            </Fragment>
        )
    }

    return (
        <Segment basic style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '1000px', textOverflow: 'ellipsis'}}>
            <Table id="my-followers-picks-table" compact='very' basic='very' style={{tableLayout: 'fixed'}}>
                {/* {props.loading ? renderLoading() : renderGames()} */}
                {renderMyFollowsPicks()}
            </Table>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        filteredPicks: state.myFollowsPicksReducer.filteredPicks,
        loading: state.myFollowsPicksReducer.loading
    }
}

export default connect(mapStateToProps, null)(MyFollowsPicksContainer);
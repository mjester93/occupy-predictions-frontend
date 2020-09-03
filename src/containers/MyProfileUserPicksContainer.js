import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Dimmer, Image, Loader, Segment, Table } from 'semantic-ui-react'

import MyProfilePick from '../components/MyProfilePick';

const MyProfileUserPicksContainer = (props) => {

    const renderMyProfilePicks = () => {
        return (
            <Fragment>
                <Table.Header>
                    <Table.Row>
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
                        ? null
                        : props.filteredUserPicks.map(up => {return <MyProfilePick key={up.id} pick={up} />})
                    }
                </Table.Body>
            </Fragment>
        )
    }

    const renderLoading = () => {
        return (
            <div>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <Image width="100%" src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </div>
        )
    }

    return (
        <Segment basic style={{overflowY: 'auto', overflowX: 'hidden', textOverflow: 'ellipsis'}}>
            <Table id="my-profile-picks-table" compact='very' basic='very' style={{tableLayout: 'fixed'}}>
                {props.loading ? renderLoading() : renderMyProfilePicks()}
                {/* {renderMyProfilePicks()} */}
            </Table>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        filteredUserPicks: state.usersReducer.user.filteredUserPicks,
        loading: state.usersReducer.loading
    }
}

export default connect(mapStateToProps, null)(MyProfileUserPicksContainer);
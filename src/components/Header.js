import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Menu, Button } from 'semantic-ui-react'

import occupyPredictionsFull from '../images/occupy-predictions-full.png'

const Header = (props) => {

    const { loggedIn, logUserOut } = props;
    let decodedToken;

    if (localStorage.getItem('token') !== null) {
        decodedToken = jwt_decode(localStorage.getItem('token'))
    }

    const loggedInButtons = () => {
        return (
            <Fragment>
                <Menu.Item onClick={() => {logUserOut()}} position='right'>
                    <Button className="header-button">Logout</Button>
                </Menu.Item>
            </Fragment>
        )
    }

    const loggedOutButtons = () => {
        return (
            <Fragment>
                <Menu.Item href="/login" position='right'>
                    <Button className="header-button">Login</Button>
                </Menu.Item>
                <Menu.Item href="/sign-up">
                    <Button className="header-button">Sign Up</Button>
                </Menu.Item>
            </Fragment>
        )
    }

    return (
        <Menu borderless>
            <Menu.Item href="/">
                <img className="menu-logo" src={occupyPredictionsFull} alt="Occupy Predictions" />
            </Menu.Item>
            { decodedToken ? <Menu.Item name="My Profile" href={`/user/${decodedToken['user_id']}`} /> : null }
            <Menu.Item name='Leaderboard' href='/leaderboard' />
            { decodedToken ? <Menu.Item name='My Follows' href='/my-follows' /> : null }
            { loggedIn ? loggedInButtons() : loggedOutButtons() }
        </Menu>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.usersReducer.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch({type: 'LOG_USER_OUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
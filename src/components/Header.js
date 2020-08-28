import React, { Fragment } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'

import occupyPredictionsFull from '../images/occupy-predictions-full.png'

const Header = (props) => {

    const { loggedIn, logUserOut } = props;
    const history = useHistory();

    const logOutUser = () => {
        // TODO: run store.dispatch({type: 'LOG_USER_OUT'}) to change global state
        localStorage.removeItem('token');
        logUserOut();
        history.push('/');
    }

    const loggedInButtons = () => {
        return (
            <Fragment>
                <Menu.Item onClick={() => {logOutUser()}} position='right'>
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
            <Menu.Item name="My Profile" href="/my-profile" />
            <Menu.Item name='Leaderboard' href='/leaderboard' />
            <Menu.Item name='My Follows' href='/my-follows' />
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
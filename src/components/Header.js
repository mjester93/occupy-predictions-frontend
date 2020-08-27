import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { Menu, Button } from 'semantic-ui-react'

import occupyPredictionsFull from '../images/occupy-predictions-full.png'

const Header = () => {

    const history = useHistory();

    const logUserOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <Menu borderless>
            <Menu.Item href="/">
                <img className="menu-logo" src={occupyPredictionsFull} alt="Occupy Predictions" />
            </Menu.Item>
            <Menu.Item name="My Profile" href="/my-profile" />
            <Menu.Item name='Leaderboard' href='/leaderboard' />
            <Menu.Item name='My Follows' href='/my-follows' />
            <Menu.Item href="/login" position='right'>
                <Button className="header-button">Login</Button>
            </Menu.Item>
            <Menu.Item href="/sign-up">
                <Button className="header-button">Sign Up</Button>
            </Menu.Item>
            <Menu.Item onClick={() => {logUserOut()}}>
                <Button className="header-button">Logout</Button>
            </Menu.Item>
        </Menu>
    )
}

export default Header
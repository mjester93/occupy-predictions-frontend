import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Icon, Image } from 'semantic-ui-react';
import OccupyLogo from '../images/occupy-logo.png';
import jwt_decode from 'jwt-decode';

import loginBackground from '../images/login-background.png';

const LOGIN_URL = 'http://localhost:3000/login';

const Login = (props) => {

    const history = useHistory();

    const [email, handleEmailChange] = useState('');
    const [password, handlePasswordChange] = useState('');
    const [errorMessage, handleErrorMessage] = useState(null);
    const [errorMessageList, handleErrorMessageList] = useState([])
    const [errorMessageDisplay, handleErrorMessageDisplay] = useState('none')

    const handleOnChange = (event) => {
        switch (event.target.name) {
            case 'email':
                handleEmailChange(event.target.value)
                break;

            case 'password':
                handlePasswordChange(event.target.value)
                break;

            default:
                return null
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = new FormData();
        form.append('email', email);
        form.append('password', password);

        const options = { method: 'POST', body: form }

        fetch(LOGIN_URL, options)
        .then(response => response.json())
        .then(userData => {
            if (userData.error) {
                handleErrorMessage(userData.error);
                handleErrorMessageList(userData.messages)
                handleErrorMessageDisplay('inherit')
            } else {
                props.dispatch({type: 'LOG_USER_IN', token: userData.token});
                history.push(`/user/${jwt_decode(localStorage.getItem('token'))['user_id']}`);
            }
        })
        .catch(error => alert(error))
    }

    return (
        <div className="ui middle aligned center aligned grid login-page-div" style={{minHeight: '500px', backgroundImage:`url(${loginBackground})` }}>
            <div className="five wide column">
                <h2 className="ui teal image header">
                    <Image src={OccupyLogo} alt="occupy logo" />
                    <div className="content" style={{color: 'white'}}>Log-in to your account</div>
                </h2>
                <form className="ui large form" onSubmit={ (event) => {handleOnSubmit(event)} }>
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon disabled name="mail" />
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="E-mail address" 
                                    onChange={(event) => handleOnChange(event)} 
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon disabled name="lock" />
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    onChange={(event) => handleOnChange(event)} 
                                    required
                                />
                            </div>
                        </div>
                        <Button type='submit' className="ui fluid large submit button occupy-green-button">Login</Button>
                    </div>
                    <div className="ui error message" style={{display: errorMessageDisplay}}>
                        <span>{errorMessage}</span>
                        <ul style={{textAlign: 'left'}}>
                            {errorMessageList.map(
                                (error) => { return (
                                    <li>{error}</li>
                                )}
                            )}
                        </ul>
                    </div>
                </form>
                <div className="ui message">New to us? <a href="/sign-up">Sign Up</a></div>
            </div>
        </div>
    )
}

export default connect()(Login)
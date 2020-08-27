import React, { useState } from 'react'
import { Icon, Image } from 'semantic-ui-react'

import OccupyLogo from '../images/occupy-logo.png'

const Login = () => {

    const [email, handleEmailChange] = useState('');
    const [password, handlePasswordChange] = useState('');

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

    return (
        <div className="ui middle aligned center aligned grid">
            <div className="five wide column">
                <h2 className="ui teal image header">
                    <Image src={OccupyLogo} alt="occupy logo" />
                    <div className="content occupy-green-text">Log-in to your account</div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon disabled name="mail" />
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="E-mail address" 
                                    onChange={(event) => handleOnChange(event)} 
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
                                />
                            </div>
                        </div>
                        <div className="ui fluid large submit button occupy-green-button">Login</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
                <div className="ui message">New to us? <a href="/sign-up">Sign Up</a></div>
            </div>
        </div>
    )
}

export default Login
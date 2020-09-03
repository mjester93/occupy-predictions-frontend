import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Icon, Image } from 'semantic-ui-react'
import OccupyLogo from '../images/occupy-logo.png'
import jwt_decode from 'jwt-decode';

const SIGNUP_URL = 'http://localhost:3000/users';

const SignUp = (props) => {

    const history = useHistory();

    const [username, handleUsernameChange] = useState(null);
    const [email, handleEmailChange] = useState(null);
    const [password, handlePasswordChange] = useState(null);
    const [profilePicture, handleProfilePictureChange] = useState(null);
    const [twitter, handleTwitterChange] = useState(null);
    const [instagram, handleInstagramChange] = useState(null);
    const [youtube, handleYoutubeChange] = useState(null);
    const [twitch, handleTwitchChange] = useState(null);
    const [reddit, handleRedditChange] = useState(null);
    const [snapchat, handleSnapchatChange] = useState(null);

    const handleOnChange = (event) => {
        const value = event.target.value

        switch (event.target.name) {
            case 'username':
                handleUsernameChange(value);
                break;

            case 'email':
                handleEmailChange(value);
                break;
                
            case 'password':
                handlePasswordChange(value);
                break;

            case 'profile-picture':
                handleProfilePictureChange(event.target.files[0]);
                break;

            case 'twitter':
                handleTwitterChange(value)
                break;
            
            case 'instagram':
                handleInstagramChange(value);
                break;
            
            case 'youtube':
                handleYoutubeChange(value);
                break;

            case 'twitch':
                handleTwitchChange(value);
                break;

            case 'reddit':
                handleRedditChange(value);
                break;

            case 'snapchat':
                handleSnapchatChange(value);
                break;

            default:
                return null
        }
    }

    const handleOnSubmit = (event) => {

        event.preventDefault();

        const form = new FormData();
        form.append('username', username);
        form.append('email', email);
        form.append('password', password);
        form.append('photo', profilePicture);
        form.append('twitter_handle', twitter);
        form.append('instagram_handle', instagram);
        form.append('youtube_handle', youtube);
        form.append('twitch_handle', twitch);
        form.append('reddit_handle', reddit);
        form.append('snapchat_handle', snapchat);

        const options = {method: 'POST', body: form}

        fetch(SIGNUP_URL, options)
        .then(response => response.json())
        .then(userData => {
            props.dispatch({type: 'LOG_USER_IN', token: userData.token});
            history.push(`/user/${jwt_decode(localStorage.getItem('token'))['user_id']}`);
        })
        .catch(error => alert(error));
    }

    return (
        <div className="ui middle aligned center aligned grid">
            <div className="five wide column">
                <h2 className="ui teal image header">
                    <Image src={OccupyLogo} alt="occupy logo" />
                    <div className="content occupy-green-text">Sign Up For An Account</div>
                </h2>
                <form className="ui large form" onSubmit={(event) => handleOnSubmit(event)}>
                    <div className="ui stacked segment">
                        <h4>
                            <div className="content occupy-green-text">Required Fields</div>
                            <hr />
                        </h4>
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon disabled color="red" name="user" />
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username" 
                                    onChange={(event) => handleOnChange(event)} 
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon disabled color="red" name="mail" />
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
                                <Icon color="red" name="lock" />
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    onChange={(event) => handleOnChange(event)} 
                                    required
                                />
                            </div>
                        </div>

                        <h4 className="ui header">
                            <div className="content occupy-green-text">Profile Picture</div>
                        </h4>
                        <hr />

                        <div className="field">
                            <div className="ui left icon input">
                                <input 
                                    type="file" 
                                    name="profile-picture"
                                    accept="image/*"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <h4 className="ui header">
                            <div className="content occupy-green-text">Social Media Names</div>
                        </h4>
                        <hr />

                        <div className="field left-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="twitter" />
                                <input 
                                    type="text" 
                                    name="twitter" 
                                    placeholder="Twitter"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <div className="field right-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="instagram" />
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    placeholder="Instagram"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <div className="field left-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="youtube play" />
                                <input 
                                    type="text" 
                                    name="youtube" 
                                    placeholder="Youtube"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <div className="field right-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="twitch" />
                                <input 
                                    type="text" 
                                    name="twitch" 
                                    placeholder="Twitch"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <div className="field left-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="reddit alien" />
                                <input 
                                    type="text" 
                                    name="reddit" 
                                    placeholder="Reddit"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>

                        <div className="field right-sm-field">
                            <div className="ui left icon input">
                                <Icon disabled name="snapchat ghost" />
                                <input 
                                    type="text" 
                                    name="snapchat" 
                                    placeholder="Snapchat"
                                    onChange={(event) => handleOnChange(event)} 
                                />
                            </div>
                        </div>


                        <Button type='submit' className="ui fluid large submit button occupy-green-button">Sign Up</Button>
                    </div>
                    <div className="ui error message"></div>
                </form>
                <div className="ui message">Have an account? <a href="/login">Login</a></div>
            </div>
        </div>
    )
}

export default connect(null, null)(SignUp)
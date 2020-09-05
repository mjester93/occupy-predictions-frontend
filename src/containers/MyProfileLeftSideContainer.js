import React, { useState } from 'react'
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Pluralize from 'react-pluralize'
import { Button, Form, Icon, Modal, Segment } from 'semantic-ui-react'

const MyProfileLeftSideContainer = (props) => {

    const { user, userId, loading, loggedIn } = props;

    const [selectionModalOpen, setSelectionModalOpen] = useState(false);
    const [editUsername, setEditUsername] = useState(user.username);
    const [editEmail, setEditEmail] = useState(user.email);
    const [editPhoto, setEditPhoto] = useState(null)
    const [editTwitter, setEditTwitter] = useState(user.twitter_handle);
    const [editInstagram, setEditInstagram] = useState(user['instagram_handle']);
    const [editYoutube, setEditYoutube] = useState(user['youtube_handle']);
    const [editTwitch, setEditTwitch] = useState(user['twitch_handle']);
    const [editReddit, setEditReddit] = useState(user['reddit_handle']);
    const [editSnapchat, setEditSnapchat] = useState(user['snapchat_handle']);

    const setEditProfileStuff = () => {
        setEditUsername(user.username);
        setEditEmail(user.email);
        setEditTwitter(user['twitter_handle']);
        setEditInstagram(user['instagram_handle']);
        setEditYoutube(user['youtube_handle']);
        setEditTwitch(user['twitch_handle']);
        setEditReddit(user['reddit_handle']);
        setEditSnapchat(user['snapchat_handle']);
    }

    let is_current_user = false;
    let logged_in = false;
    let decodedToken;
    if (localStorage.getItem('token') !== null) {
        logged_in = true;
        decodedToken = jwt_decode(localStorage.getItem('token'));
        if (decodedToken['user_id'] === parseInt(userId, 10)) {
            is_current_user = true;
        }
    }

    const userNameHeader = () => {
        return (
            <div className="username-with-badges">
                <h2 className="my-profile-username">
                    { loading 
                    ? <span style={{fontFamily: 'Oswald'}}>LOADING PROFILE...</span> : 
                    user.username
                    }
                </h2>
                &nbsp;
                { user['is_featured'] ? <Icon circular name="check" id="fab-check" /> : null }
                &nbsp;
                { user['is_staff'] ? <Icon id="fab-op" /> : null }
            </div>
        )
    }

    const handleOnChange = (event) => {
        const value = event.target.value

        switch (event.target.name) {
            case 'username':
                setEditUsername(value);
                break;

            case 'email':
                setEditEmail(value);
                break;

            case 'profile-picture':
                setEditPhoto(event.target.files[0]);
                break;

            case 'twitter':
                setEditTwitter(value)
                break;
            
            case 'instagram':
                setEditInstagram(value);
                break;
            
            case 'youtube':
                setEditYoutube(value);
                break;

            case 'twitch':
                setEditTwitch(value);
                break;

            case 'reddit':
                setEditReddit(value);
                break;

            case 'snapchat':
                setEditSnapchat(value);
                break;

            default:
                return null
        }
    }

    const getSocialMediaHandle = (type) => {
        switch (type) {
            case "twitter":
                if (user['twitter_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.twitter.com/${user['twitter_handle']}`}>
                            <Icon link circular name='twitter' id="fab-twitter" />
                        </a>
                    )
                }
                break;

            case "instagram":
                if (user['instagram_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${user['instagram_handle']}`}>
                            <Icon link circular name='instagram' id="fab-instagram" />
                        </a>
                    )
                }

            case "youtube":
                if (user['youtube_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/${user['youtube_handle']}`}>
                            <Icon link circular name='youtube play' id='fab-youtube-play' />
                        </a>
                    )
                }
            
            
            case "twitch": 
                if (user['twitch_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://twitch.tv/${user['twitch_handle']}`}>
                            <Icon link circular name='twitch' id="fab-twitch" />
                        </a>
                    )
                }
            
            case "reddit":
                if (user['reddit_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://reddit.com/u/${user['reddit_handle']}`}>
                            <Icon link circular name='reddit alien' id="fab-reddit-alien" />
                        </a>
                    )
                }

            case "snapchat":
                if (user['snapchat_handle']) {
                    return (
                        <a target="_blank" rel="noopener noreferrer" href={`https://snapchat.com/add/${user['snapchat_handle']}`}>
                            <Icon link circular name='snapchat ghost' id="fab-snapchat-ghost" />
                        </a>
                    )
                }
        
            default:
                break;
        }
    }

    const submitSelectionForm = (event) => {
        event.preventDefault();

        const form = new FormData();
        form.append('token', localStorage.getItem('token'))
        form.append('username', editUsername);
        form.append('email', editEmail);
        form.append('photo', editPhoto);
        form.append('twitter_handle', editTwitter);
        form.append('instagram_handle', editInstagram);
        form.append('youtube_handle', editYoutube);
        form.append('twitch_handle', editTwitch);
        form.append('reddit_handle', editReddit);
        form.append('snapchat_handle', editSnapchat);

        const options = {method: 'PATCH', body: form}

        fetch('http://localhost:3000/users/' + decodedToken['user_id'], options)
        .then(response => response.json())
        .then(userData => {
            props.dispatch( {type: 'UPDATE_USER_INFORMATION', userData});
            setSelectionModalOpen(false);
        })
        .catch(error => alert(error));
    }

    const editProfileModal = () => {
        return (
            <Modal
                size='tiny'
                onClose={() => setSelectionModalOpen(false)}
                onOpen={() => {setEditProfileStuff(); setSelectionModalOpen(true)}}
                open={selectionModalOpen}
                trigger={<p><a href="#">Edit profile</a></p>}
            >
                <Modal.Header>Edit Profile ({user.username})</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form id="update-profile" onSubmit={(event) => submitSelectionForm(event)}>
                            <Form.Field>
                                <label htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    id="update-profile-username"
                                    form="update-profile"
                                    value={editUsername}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    id="update-profile-email"
                                    form="update-profile"
                                    value={editEmail}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label>Photo</label>
                                <input 
                                    type="file" 
                                    name="profile-picture"
                                    accept="image/*"
                                    onChange={(e) => {handleOnChange(e)}}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="twitter">Twitter</label>
                                <input
                                    name="twitter"
                                    id="update-profile-twitter"
                                    form="update-profile"
                                    value={editTwitter}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="instagram">Instagram</label>
                                <input
                                    name="instagram"
                                    id="update-profile-instagram"
                                    form="update-profile"
                                    value={editInstagram}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="youtube">Youtube</label>
                                <input
                                    name="youtube"
                                    id="update-profile-youtube"
                                    form="update-profile"
                                    value={editYoutube}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="twitch">Twitch</label>
                                <input
                                    name="twitch"
                                    id="update-profile-twitch"
                                    form="update-profile"
                                    value={editTwitch}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="reddit">Reddit</label>
                                <input
                                    name="reddit"
                                    id="update-profile-reddit"
                                    form="update-profile"
                                    value={editReddit}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="reddit">Snapchat</label>
                                <input
                                    name="snapchat"
                                    id="update-profile-snapchat"
                                    form="update-profile"
                                    value={editSnapchat}
                                    onChange={(e) => {handleOnChange(e)}}
                                >
                                </input>
                            </Form.Field>
                            <Button type='submit' className='occupy-green-button'>Submit</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

    const followUser = () => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                token: localStorage.getItem('token')
            })
        }

        fetch('http://localhost:3000/followers', options)
        .then(response => response.json())
        .then(followData => props.dispatch( {type: "UPDATE_FOLLOWEES", followData}) )
        .catch(error => alert(error))
    }

    const unFollowUser = () => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                token: localStorage.getItem('token')
            })
        }

        fetch('http://localhost:3000/delete-follow', options)
        .then(response => response.json())
        .then(followData => props.dispatch( {type: "UPDATE_FOLLOWEES", followData}) )
        .catch(error => alert(error))
    }

    const followOrUnFollowButton = () => {
        debugger
        if (user.followees_ids && logged_in) {
            return user.followees_ids.includes(decodedToken.user_id) ? unFollowButton() : followButton()
        } else {
            return <div></div>
        }
    }

    const followButton = () => {
        return (
            <Button 
                style={{padding: '2px'}} 
                className="occupy-green-button follow-button"
                onClick={() => {followUser()}}
            >
                Follow User
            </Button>
        )
    }

    const unFollowButton = () => {
        return (
            <Button 
                style={{padding: '2px'}} 
                className="occupy-green-button follow-button"
                onClick={() => {unFollowUser()}}
            >
                Unfollow User
            </Button>
        )
    }

    const getPhoto = () => {
        if (user.photo) {
            return user.photo
        }

        return 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Portrait_Placeholder_Square.png'
    }

    return (
        <Segment style={{border: '1px solid #00654D'}}>
            {userNameHeader()}
            {is_current_user ? editProfileModal() : null}
            {loading 
            ? null 
            : <img alt="avatar" src={getPhoto()} style={{borderRadius: '50%', display: 'block'}} width="100px" />
            }
            <div style={{paddingTop: '20px'}}>
                <h4 style={{marginBottom: '0'}}>
                    {loading ? null : <Pluralize singular={'follower'} count={user.followees_count} /> }
                </h4>
                {is_current_user ? null : followOrUnFollowButton()}
            </div>
            <h4>Social Media</h4>
            <div className="social-media-icons">
                {getSocialMediaHandle("twitter")}
                {getSocialMediaHandle("instagram")}
                {getSocialMediaHandle("youtube")}
                {getSocialMediaHandle("twitch")}
                {getSocialMediaHandle("reddit")}
                {getSocialMediaHandle("snapchat")}
            </div>
            <h4>Records</h4>
            <ul>
                <li>Total: { loading ? null : user.records.total }</li>
                <li>MLB: { loading ? null : user.records.MLB }</li>
                <li>NBA: { loading ? null : user.records.NBA }</li>
                <li>NFL: { loading ? null : user.records.NFL }</li>
                <li>NHL: { loading ? null : user.records.NHL }</li>
            </ul>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.user,
        loading: state.usersReducer.loading,
        loggedIn: state.usersReducer.loading
    }
}

export default connect(mapStateToProps, null)(MyProfileLeftSideContainer);
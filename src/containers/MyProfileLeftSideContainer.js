import React, { useState } from 'react'
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Button, Form, Icon, Modal, Segment } from 'semantic-ui-react'

const MyProfileLeftSideContainer = (props) => {

    const { user, userId, loading } = props;

    const [selectionModalOpen, setSelectionModalOpen] = useState(false);
    const [editUsername, setEditUsername] = useState(user.username);
    const [editEmail, setEditEmail] = useState(user.email);
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
    let decodedToken;
    if (localStorage.getItem('token') !== null) {
        decodedToken = jwt_decode(localStorage.getItem('token'));
        if (decodedToken['user_id'] === parseInt(userId, 10)) {
            is_current_user = true;
        }
    }

    const userNameHeader = () => {
        return (
            <div className="username-with-badges">
                <h2 className="my-profile-username">{ loading ? 'Username' : user.username}</h2>
                &nbsp;
                { user['is_featured'] ? <Icon circular name="check" id="fab-check" /> : null }
                &nbsp;
                { user['is_staff'] ? <Icon id="fab-op" /> : null }
            </div>
        )
    }

    const getTwitterHandle = () => {
        if (user['twitter_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://www.twitter.com/${user['twitter_handle']}`}>
                    <Icon link circular name='twitter' id="fab-twitter" />
                </a>
            )
        }
    }

    const getInstagramHandle = () => {
        if (user['instagram_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${user['instagram_handle']}`}>
                    <Icon link circular name='instagram' id="fab-instagram" />
                </a>
            )
        }
    }

    const getYoutubeHandle = () => {
        if (user['youtube_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/${user['youtube_handle']}`}>
                    <Icon link circular name='youtube play' id='fab-youtube-play' />
                </a>
            )
        }
    }

    const getTwitchHandle = () => {
        if (user['twitch_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://twitch.tv/${user['twitch_handle']}`}>
                    <Icon link circular name='twitch' id="fab-twitch" />
                </a>
            )
        }
    }

    const getRedditHandle = () => {
        if (user['twitch_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://reddit.com/u/${user['reddit_handle']}`}>
                    <Icon link circular name='reddit alien' id="fab-reddit-alien" />
                </a>
            )
        }
    }

    const getSnapchatHandle = () => {
        if (user['twitch_handle']) {
            return (
                <a target="_blank" rel="noopener noreferrer" href={`https://snapchat.com/add/${user['snapchat_handle']}`}>
                    <Icon link circular name='snapchat ghost' id="fab-snapchat-ghost" />
                </a>
            )
        }
    }

    const submitSelectionForm = (e) => {
        debugger;
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
                                    onChange={(e) => {e.preventDefault(); setEditUsername(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditEmail(e.target.value)}}
                                >
                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="twitter">Twitter</label>
                                <input
                                    name="twitter"
                                    id="update-profile-twitter"
                                    form="update-profile"
                                    value={editTwitter}
                                    onChange={(e) => {e.preventDefault(); setEditTwitter(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditInstagram(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditYoutube(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditTwitch(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditReddit(e.target.value)}}
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
                                    onChange={(e) => {e.preventDefault(); setEditSnapchat(e.target.value)}}
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

    return (
        <Segment style={{border: '1px solid black'}}>
            {userNameHeader()}
            {is_current_user ? editProfileModal() : null}
            <img alt="avatar" src={user.photo} style={{borderRadius: '50%', display: 'block'}} width="100px" />
            <p>115 followers</p>
            <h4>Social Media</h4>
            <div className="social-media-icons">
                {getTwitterHandle()}
                {getInstagramHandle()}
                {getYoutubeHandle()}
                {getTwitchHandle()}
                {getRedditHandle()}
                {getSnapchatHandle()}
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
        loading: state.usersReducer.loading
    }
}

export default connect(mapStateToProps, null)(MyProfileLeftSideContainer);
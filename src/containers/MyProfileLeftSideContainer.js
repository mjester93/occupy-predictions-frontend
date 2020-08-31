import React from 'react'
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react'

const MyProfileLeftSideContainer = (props) => {

    const { user, loading } = props;

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

    return (
        <Segment style={{border: '1px solid black'}}>
            {userNameHeader()}
            <p>Edit your profile</p>
            <img alt="avatar" src={user.photo} style={{borderRadius: '50%'}} width="100px" />
            <p>115 followers</p>
            {/* <h4>Bio</h4> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tellus a justo finibus auctor.</p> */}
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
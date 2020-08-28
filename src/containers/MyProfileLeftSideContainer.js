import React from 'react'
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react'

const MyProfileLeftSideContainer = (props) => {

    const { user, loading } = props;

    const userNameHeader = () => {
        return (
            <div className="username-with-badges">
                {/* <h2 className="my-profile-username">{ loading ? 'Username' : user.username}</h2> */}
                &nbsp;
                <Icon circular name="check" id="fab-check" />
                &nbsp;
                <Icon id="fab-op" />
            </div>
        )
    }

    return (
        <Segment style={{border: '1px solid black'}}>
            {userNameHeader()}
            <p>Edit your profile</p>
            <img alt="avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" width="100px" />
            <p>115 followers</p>
            <h4>Bio</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tellus a justo finibus auctor.</p>
            <h4>Social Media</h4>
            <div className="social-media-icons">
                <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
                    <Icon link circular name='twitter' id="fab-twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://isntagram.com/">
                    <Icon link circular name='instagram' id="fab-instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/">
                    <Icon link circular name='youtube play' id='fab-youtube-play' />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/">
                    <Icon link circular name='twitch' id="fab-twitch" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://reddit.com/u/">
                    <Icon link circular name='reddit alien' id="fab-reddit-alien" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://snapchat.com/add/">
                    <Icon link circular name='snapchat ghost' id="fab-snapchat-ghost" />
                </a>
            </div>
            <h4>Records</h4>
            <ul>
                <li>Total: </li>
                <li>MLB: </li>
                <li>NBA: </li>
                <li>NFL: </li>
                <li>NHL: </li>
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
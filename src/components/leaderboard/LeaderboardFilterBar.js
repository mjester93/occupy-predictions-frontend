import React from 'react'
import { Icon } from 'semantic-ui-react';

const LeaderboardFilterBar = (props) => {

    return (
        <div>
            <p>
                The leaderboard will show users who have more wins than losses over the last 90 days, sorting by their
                total number of wins. The <strong>Last Pick</strong> column includes a user's last pick, and either a 
                green checkmark (<Icon color='green' name='check' />) or a red X (<Icon color='red' name='x' />) 
                will be shown for a win or a loss, respectively. The&nbsp;
                 <strong>Next Pick</strong> column is that user's next pick that is pending (if applicable)
            </p>
        </div>
    )
}

export default LeaderboardFilterBar;
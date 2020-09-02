import React from 'react';
import { Button } from 'semantic-ui-react'

import occupyLogo from '../images/occupy-logo.png'

const NoMatch = () => {

    return (
      <div style={{textAlign: 'center', height: '50vh'}}>
        <span className="errorSpan">404</span>
        <img alt="occupy logo" src={occupyLogo} width="7%" />
        <h2>Timeout. Looks Like You've Gone Out Of Bounds. Let's Get You Back In The Game.</h2>
        <Button className="occupy-green-button" href="/">Back To Home</Button>
      </div>
    );
}

export default NoMatch;
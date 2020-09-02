import React from 'react';
import { useLocation } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import occupyLogo from '../images/occupy-logo.png'

const NoMatch = () => {
    let location = useLocation();
  
    return (
      <div style={{textAlign: 'center', height: '50vh'}}>
        <span className="errorSpan">404</span>
        <img src={occupyLogo} width="7%" />
        <h2>Timeout. Looks Like You've Gone Out Of Bounds. Let's Get You Back In The Game.</h2>
        <Button className="occupy-green-button" href="/">Back To Home</Button>
      </div>
    );
}

export default NoMatch;
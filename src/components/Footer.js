import React from 'react'
import { Container, Grid, List } from 'semantic-ui-react'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <h4>About Us</h4>
                            <List style={{color: 'black'}}>
                                <List.Item>About Us</List.Item>
                                <List.Item>Terms and conditions</List.Item>
                                <List.Item>FAQ</List.Item>
                                <List.Item>Privacy Policy</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4>My Account</h4>
                            <List style={{color: 'black'}}>
                                <List.Item>My Profile</List.Item>
                                <List.Item>My Follows</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4>Support</h4>
                            <List style={{color: 'black'}}>
                                <List.Item>Email</List.Item>
                                <List.Item>Twitter</List.Item>
                                <List.Item>Occupy Fantasy</List.Item>
                                <List.Item>dfs Magic</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <a href="https://sportsdata.io/">
                                <img alt="sportsdataIO" width="100%" src="https://sportsdata.io/assets/images/badges/sportsdataio-powered-by-dark.png" />
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <hr />
                <span className="disclaimer">©2017–2020 Occupy Fantasy, LLC. All Rights Reserved.</span><br />
                <span className="disclaimer">DISCLAIMER: This site is for entertainment purposes only and does not involve any real money wagering. If you or anyone you know has a gambling problem, call 1-800-GAMBLER. This website is for adults.</span>
            </Container>
        </footer>
    )
}

export default Footer;

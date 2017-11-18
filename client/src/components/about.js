import React, { Component } from 'react';
import { Container, Header, Icon, Grid } from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Container fluid className="about">
        <Header as="h1" icon>
          <Icon name="github alternate" />
          Github Resume
          <Grid columns={2} centered>
            <Grid.Column className="justified">
              <Header.Subheader className=" px-10">
                This app is focused on enhancing the ablities of recruiters to
                select a perfect candidate for the specified technical role.
                With this app, the recruiter can see if the candidate has
                specific skills required for the position
              </Header.Subheader>
            </Grid.Column>
          </Grid>
        </Header>
      </Container>
    );
  }
}

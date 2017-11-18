import React, { Component } from 'react';
import {
  Container,
  Header,
  Image,
  Grid,
  Button,
  Sticky
} from 'semantic-ui-react';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  renderRight = () => {
    if (this.props.user) {
      return (
        <Container>
          <Button secondary className="float-right flex" href="/api/logout">
            <span>Logout</span>
          </Button>
          <Image
            className="float-right flex"
            src={this.props.user.avatar}
            width={40}
            circular
            spaced={true}
          />
        </Container>
      );
    } else {
      return (
        <Button className="float-right" secondary size="small" href="/auth">
          Login with Github
        </Button>
      );
    }
  };

  render() {
    const { contextRef } = this.state;
    return (
      <Sticky active={true} context={contextRef}>
        <Container fluid className="nav">
          <Grid columns={3} centered>
            <Grid.Column />
            <Grid.Column width={3}>
              <Header className="head" verticalAlign="middle">
                <Image
                  src={`${process.env.PUBLIC_URL}/images/github.png`}
                  size="mini"
                  spaced={true}
                />
                <p>Github Resume</p>
              </Header>
            </Grid.Column>
            <Grid.Column>{this.renderRight()}</Grid.Column>
          </Grid>
        </Container>
      </Sticky>
    );
  }
}

export default connect(null, null)(Navbar);

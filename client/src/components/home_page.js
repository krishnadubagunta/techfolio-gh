import React, { Component } from 'react';
import {
  Container,
  Header,
  Icon,
  Grid,
  Loader,
  Image,
  Dropdown
} from 'semantic-ui-react';
import { fetchGit } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  componentDidMount() {
    console.log(this.props.user);
    this.props.fetchGit();
  }

  renderViewer = () => {
    return (
      <Container fluid className="about">
        <Header as="h1" icon>
          <Grid centered>
            <Grid.Column>
              <Header.Subheader className="margin-10">
                <Loader active inline="centered">
                  <Icon name="github alternate" />
                  Your profile is being generated. Please wait
                </Loader>
              </Header.Subheader>
            </Grid.Column>
          </Grid>
        </Header>
      </Container>
    );
  };

  renderDrop = () => {
    console.log('Rea');
  };

  render() {
    let image;
    if (this.props.user.cover) {
      image = this.props.user.cover;
    } else {
      image = `${process.env.PUBLIC_URL}/images/default.jpg`;
    }
    return (
      <Container fluid>
        <Grid centered>
          <Grid.Row>
            <Grid.Column columns={1}>
              <Image className="coverPhoto" src={image} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7} className="pullUp">
              <Image
                src={this.props.user.avatar}
                circular
                size="small"
                centered
              />
              <Header as="h2" textAlign="center" className="content-inline">
                {this.props.user.displayName}
                <Header.Subheader>
                  <a href={this.props.user.profileUrl}>{`@${this.props.user
                    .login}`}</a>
                  <center>
                    <blockquote>
                      <cite>{this.props.user.bio}</cite>
                    </blockquote>
                  </center>
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Dropdown
              text="More"
              icon="ellipsis vertical"
              floating
              labeled
              className="fit"
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  icon="add square"
                  content="Add another social network"
                />
                <Dropdown.Divider />
                <Dropdown.Item icon="mail" content="Email" />
                <Dropdown.Item icon="world" content="Website" />
                <Dropdown.Item icon="facebook square" content="Facebook" />
                <Dropdown.Item icon="linkedin square" content="Linkedin" />
                <Dropdown.Item icon="google plus square" content="Google" />
                <Dropdown.Item icon="twitter square" content="Twitter" />
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Row>
        </Grid>
        {this.renderViewer()}
      </Container>
    );
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ fetchGit }, dispatch);
}

function mapStateToProps({ viewer }) {
  return { viewer };
}

export default connect(mapStateToProps, mapStateToDispatch)(Home);

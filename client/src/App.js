import React, { Component } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Home from './components/home_page';
import { fetchUser } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderPage = () => {
    switch (this.props.user) {
      case null:
        return <Loader size="large" active />;
      case false:
        return <About />;
      default:
        return <Home user={this.props.user} />;
    }
  };

  render() {
    return (
      <Container fluid>
        <Navbar user={this.props.user} />
        <BrowserRouter>
          <Switch>
            <Route to="/" component={() => this.renderPage()} />
            <Route
              to="/error"
              component={() => {
                return <Container>Error Occured</Container>;
              }}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps, mapStateToDispatch)(App);

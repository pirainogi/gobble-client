import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import UserShow from './components/UserShow'
import Footer from './components/Footer'
import { connect } from 'react-redux';

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <>
      <Header />
      <Switch>
        <Route
          path="/usershow"
          component={() => <UserShow />}
        />
        <Route
          path="/"
          component={() => <Home />}
        />
      </Switch>
      <Footer />
      </>
    );
  }
}

function mapStateToProps(state){
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(App);

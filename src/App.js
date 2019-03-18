import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import UserShow from './components/UserShow'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import RecipeBoxContainer from './components/RecipeBoxContainer'
import SearchContainer from './components/SearchContainer'
import RecipeContainer from './components/RecipeContainer'
import { connect } from 'react-redux';
import { getrecipes } from './action-creators/actions'

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
          path="/dashboard"
          component={() => <Dashboard />}
        />
        <Route
          path="/calendar"
          component={() => <Calendar />}
        />
        <Route
          path="/recipebox"
          component={() => <RecipeBoxContainer />}
        />
        <Route
          path="/search"
          component={() => <SearchContainer />}
        />
        <Route
          path="/recipe"
          component={() => <RecipeContainer />}
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
  console.log('map state to props', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(App);

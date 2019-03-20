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


const RecipeAPI = 'http://localhost:3000/api/v1/recipes'
const UserAPI = 'http://localhost:3000/api/v1/users'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      recipesReturnedFromSearch: [],
      currentUser: [],
      recipebox: []
    }
  }

  componentDidMount() {
    fetch(RecipeAPI)
    .then(res => res.json())
    .then(recipes => this.setState({recipes: recipes}) )

    fetch(UserAPI)
    .then(res => res.json())
    .then(user => this.setState({currentUser: user}) )
  }

  render() {
    console.log(this.state);
    return (
      <>
      <Header />
      <Switch>
        <Route
          path="/usershow"
          component={() => <UserShow user={this.state.currentUser}/>}
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

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import UserShow from './containers/UserShow';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import RecipeBoxContainer from './containers/RecipeBoxContainer';
import SearchContainer from './containers/SearchContainer';
import RecipeContainer from './containers/RecipeContainer';
moment.locale('en-us');
BigCalendar.momentLocalizer(moment);


const RecipeAPI = 'http://localhost:3000/api/v1/recipes'
const UserAPI = 'http://localhost:3000/api/v1/users'
const RecipeboxAPI = 'http://localhost:3000/api/v1/recipeboxes'
const EventAPI = 'http://localhost:3000/api/v1/events'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      currentUser: [],
      currentRecipebox: [],
      currentRecipeView: {},
      calendarEvents: []
    }
  }

  componentDidMount() {
    fetch(RecipeAPI)
    .then(res => res.json())
    .then(recipes => this.setState({recipes: recipes}) )

    fetch(UserAPI)
    .then(res => res.json())
    .then(user =>
      this.setState({
        currentUser: user,
        currentRecipebox: user[0].recipes
      })
    )

    fetch(EventAPI)
    .then(res => res.json())
    .then(events => {
      for (let i=0; i < events.length; i++){
        // console.log(events[i])
        events[i].start = this.convertDate(events[i].eventStart)
        events[i].end = this.convertDate(events[i].eventEnd)
      }
      this.setState({calendarEvents: events})
    })

  }

  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  findRecipe = (routerID) => {
    // console.log('looking for recipe that matches', );
    let foundRecipe =  this.state.recipes.find( recipe => recipe.id === parseInt(routerID) )
    // console.log('returned recipe', foundRecipe);
    return foundRecipe
  }

  selectRecipePreviewForShow = (e) => {
    // console.log(e.target.id);
    let recipeToView = this.state.currentRecipebox.find(recipe => recipe.id === parseInt(e.target.id))
    // console.log(recipeToView);
    this.setState({
      currentRecipeView: recipeToView
    })
  }

  addRecipeToRecipeBox = (e) => {
    // console.log('pushing add button', e.target.id, 'user', this.state.currentUser);
    // this.props.history.push(`/recipes/${e.target.id}`)
    let recipeToAdd = this.state.recipes.find(recipe => recipe.id === parseInt(e.target.id))
    // console.log('recipe to add', recipeToAdd)
    // console.log('user id', this.state.currentUser[0].id, 'type', typeof this.state.currentUser[0].id, 'recipe id', recipeToAdd.id, 'type', typeof recipeToAdd.id)
    fetch(RecipeboxAPI,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.currentUser[0].id,
        recipe_id: recipeToAdd.id
      })
    })
    .then(res => res.json())
    // console.log('updated recipebox', this.state.currentRecipebox);
  }

  render() {
    // console.log(this.state.currentUser);
    return (
      <div>
      <Header />
        <Switch>
          <Route
            path="/profile"
            component={() => <UserShow user={this.state.currentUser}/>}
          />
          <Route
            path="/calendar"
            component={() => <Calendar
              events={this.state.calendarEvents}
            />}
          />
          <Route
            path="/recipebox"
            component={() => <RecipeBoxContainer
              currentRecipebox={this.state.currentRecipebox}
              currentRecipeView={this.state.currentRecipeView}
              selectRecipePreviewForShow={this.selectRecipePreviewForShow}
            />}
          />
          <Route
            exact
            path="/recipes/:id"
            render={routerProps => {
              let recipe = this.findRecipe(routerProps.match.params.id)
              return recipe ? (
                <RecipeContainer
                  recipes={this.state.recipes}
                  foundRecipe={recipe}
                  addRecipeToRecipeBox={this.addRecipeToRecipeBox}
                />
              ) : (
                <h1> loading dem recipes </h1>
              )
            }}
          />
          <Route
            path="/search"
            render={(routerProps) => <SearchContainer {...routerProps} recipes={this.state.recipes}/>}
          />
          <Route
            path="/"
            component={() => <Home />}
          />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;


// <Route
//   path="/dashboard"
//   component={() => <Dashboard
//     currentRecipebox={this.state.currentRecipebox}
//   />}
// />

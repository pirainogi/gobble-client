import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//importing react and all libraries
import './App.css';
//importing the css for App
import Header from './components/Header'
import Home from './components/Home';
import UserShow from './containers/UserShow';
import Footer from './components/Footer'
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';
import Login from './components/Login';
import Signup from './components/Signup';
import RecipeBoxContainer from './containers/RecipeBoxContainer';
import SearchContainer from './containers/SearchContainer';
import RecipeContainer from './containers/RecipeContainer';
//importing  all of the components

//setting the locale within the Moment library to be USA-Engl
moment.locale('en-us');
//setting the locale from moment so BigCal can use it
BigCalendar.momentLocalizer(moment);

//setting the API endpoints to variables
const RecipeAPI = 'http://localhost:3000/api/v1/recipes'
const RecipeboxAPI = 'http://localhost:3000/api/v1/recipeboxes'
const EventAPI = 'http://localhost:3000/api/v1/events'

class App extends Component {

  //state is mostly held within app and includes all of the recipes being feld to the user, the curreent user, that user's recipe box, any recipe that they want to view, the user's associated calendar events, and any recipe associated with an event (functionality doesn't work  yet)
  state = {
    recipes: [],
    currentUser: {},
    currentRecipebox: [],
    currentRecipeView: {},
    calendarEvents: [],
    recipeForEvent: {},
  }

  //upon load, fetch all of the recipes and set them in state
  componentDidMount() {
    fetch(RecipeAPI)
    .then(res => res.json())
    .then(recipes => this.setState({recipes: recipes}) )

    //further, fetch all the events
    //this should be refactored so it only fetches the events associated with a user either that hasn't logged out, or upon login
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

    //checking and saving any token in the browser's local storage as a local variable
    const token = localStorage.getItem("token")
    if (token){
      //if the tokoen exists, fetch their user info from the API
      fetch("http://localhost:3000/api/v1/auto_login", {
        method: "GET",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      //upon the promise being resolved, set that data in state so the app can access the user info, their associated recipes, and events (this overwrites the earlier fetch for all events??)
      .then(response => {
        this.setState({
          currentUser: response,
          currentRecipebox: response.recipes,
          calendarEvents: response.events,
        })
      })
    }
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

  addRecipeToRecipeBox = (recipeID) => {
    console.log('pushing add button', recipeID, 'user', this.state.currentUser);
    // // this.props.history.push(`/recipes/${e.target.id}`)
    let recipeToAdd = this.state.recipes.find(recipe => recipe.id === recipeID)
    // // console.log('recipe to add', recipeToAdd)
    // console.log('user id', this.state.currentUser[0].id, 'type', typeof this.state.currentUser[0].id, 'recipe id', recipeToAdd.id, 'type', typeof recipeToAdd.id)
    fetch(RecipeboxAPI,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        recipe_id: recipeToAdd.id
      })
    })
    .then(res => res.json())
    .then(addedRecipe => {
      let foundRecipe = this.state.recipes.find(recipe => recipe.id === addedRecipe.recipe_id)
      console.log(foundRecipe)
      let updatedRecipebox = [...this.state.currentRecipebox, foundRecipe]
      this.setState({
        currentRecipebox: updatedRecipebox
      })
    })
  }

  setCurrentUser = (response) => {
    localStorage.setItem("token", response.jwt)
    console.log(response.user)
    this.setState({
      currentUser: response.user,
      currentRecipebox: response.user.recipes,
      calendarEvents: response.user.events,
    })
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: {}
    })
  }

  updateCurrentUser = (response) => {
    console.log(response);
  }

  grabRecipeForEvent = (recipe) => {
    console.log(recipe);
    this.setState({
      recipeForEvent: recipe
    })
    this.props.history.push('/eventform')
  }

  createEvent = (stringifiedStart, stringifiedEnd, recipeName) => {

    console.log(stringifiedStart, stringifiedEnd);

    fetch("http://localhost:3000/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        name: recipeName,
        eventType: "tbd",
        eventStart: stringifiedStart,
        eventEnd: stringifiedEnd
      })
    })
    .then(res => res.json())
    .then(addedEvent => {
      console.log(addedEvent)
      this.setState({
        calendarEvents: [...this.state.calendarEvents, addedEvent]
      },     this.props.history.push('/calendar'))
    })
  }

  render() {
    // console.log('logging all info', this.state);
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser} logout={this.logout}/>
        <Switch>
          <Route
            path="/login"
            render={routerProps => <Login {...routerProps} setCurrentUser={this.setCurrentUser}/>}
          />
          <Route
            path="/signup"
            render={routerProps => <Signup {...routerProps} setCurrentUser={this.setCurrentUser}/>}
          />
          <Route
            path="/profile"
            component={() => <UserShow user={this.state.currentUser}/>}
          />
          <Route
            path="/calendar"
            component={() => <Calendar
              events={this.state.calendarEvents}
              user={this.state.currentUser}
            />}
          />
          <Route
            path="/eventform"
            component={() => <EventForm
              userID={this.state.currentUser.id}
              recipeForEvent={this.state.recipeForEvent.name}
              createEvent={this.createEvent}
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
                  grabRecipeForEvent={this.grabRecipeForEvent}
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

export default withRouter(App);


// <Route
//   path="/dashboard"
//   component={() => <Dashboard
//     currentRecipebox={this.state.currentRecipebox}
//   />}
// />

// fetch(UserAPI)
// .then(res => res.json())
// .then(user =>
//   this.setState({
//     currentUser: user,
//     currentRecipebox: user[0].recipes
//   })
// )

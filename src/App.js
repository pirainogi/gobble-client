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

  //takes a date and transforms it into UTC which BigCal requires
  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  //taking in an ID and locates the recipe in local state that matches that id, returns said recipe
  findRecipe = (routerID) => {
    let foundRecipe = this.state.recipes.find(recipe => recipe.id === parseInt(routerID))
    return foundRecipe
  }

  //searches for a recipe in the user's recipebox that matches the id of the recipe preview they have clicked on and sets it to state so that it will render
  selectRecipePreviewForShow = (e) => {
    let recipeToView = this.state.currentRecipebox.find(recipe => recipe.id === parseInt(e.target.id))

    this.setState({
      currentRecipeView: recipeToView
    })
  }

  //this takes in a recipe id and finds  the recipe object that matches, sends a post request to the API to connect a user and a recipe, then adds it pessimistically to the recipe box in state so that it will render in that component
  addRecipeToRecipeBox = (recipeID) => {
    // // this.props.history.push(`/recipes/${e.target.id}`)
    let recipeToAdd = this.state.recipes.find(recipe => recipe.id === recipeID)

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
      let updatedRecipebox = [...this.state.currentRecipebox, foundRecipe]
      this.setState({
        currentRecipebox: updatedRecipebox
      })
    })
  }

  //from the response, set a jwt token in local storage and then set the user, their assoc recipes, and cal events to local state
  setCurrentUser = (response) => {
    console.log(response)
    localStorage.setItem("token", response.jwt)
    this.setState({
      currentUser: response.user,
      currentRecipebox: response.user.recipes,
      calendarEvents: response.user.events,
    })
  }

  //remove the jwt token and reset the current user to empty obj
  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: {}
    })
  }


  // updateCurrentUser = (response) => {
  //   console.log(response);
  // }

  //take in a recipe, set it to state, and push the user to the event form
  grabRecipeForEvent = (recipe) => {
    this.setState({
      recipeForEvent: recipe
    })
    this.props.history.push('/eventform')
  }

  //takes in the start, the end, and the recipe name, posts to the events API, and then pessimistically adds the event to the local state and pushes the user to the larger calendar component
  createEvent = (stringifiedStart, stringifiedEnd, recipeName) => {
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
      this.setState({
        calendarEvents: [...this.state.calendarEvents, addedEvent]
      },     this.props.history.push('/calendar'))
    })
  }

  render() {
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

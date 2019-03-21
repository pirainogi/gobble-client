import React, { Component } from 'react';
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
      currentUser: [],
      currentRecipebox: [],
      currentRecipeView: {}
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
  }

  findRecipe = (routerID) => {
    // console.log('looking for recipe that matches', );
    let foundRecipe =  this.state.recipes.find( recipe => recipe.id === parseInt(routerID) )
    // console.log('returned recipe', foundRecipe);
    return foundRecipe
  }

  selectRecipePreviewForShow = (e) => {
    // console.log(e.target.id);
    let recipeToView = this.props.currentRecipebox.find(recipe => recipe.id === parseInt(e.target.id))
    // console.log(recipeToView);
    this.setState({
      currentRecipeView: recipeToView
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
      <Header />
      <Switch>
        <Route
          path="/usershow"
          component={() => <UserShow user={this.state.currentUser}/>}
        />
        <Route
          path="/dashboard"
          component={() => <Dashboard currentRecipebox={this.state.currentRecipebox}/>}
        />
        <Route
          path="/calendar"
          component={() => <Calendar />}
        />
        <Route
          path="/recipebox"
          component={() => <RecipeBoxContainer
              currentRecipebox={this.state.currentRecipebox}
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
                currentRecipeView={this.state.currentRecipeView}
                selectRecipePreviewForShow={this.selectRecipePreviewForShow}
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
      </div>
    );
  }
}

export default App;

// <Footer />

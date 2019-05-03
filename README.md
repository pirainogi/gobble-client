# GOBBLE
Developed by Gabbie Piraino

A full service meal-prepping application with scheduling functionality so you never have to worry about what the <i>fork</i> is for dinner again.

*** Work in Progress ***

## Built With

* Ruby on Rails
* React.js
* Javascript
* HTML5 and CSS3 (semi-responsive)

Please find the Rails database at [Gooble-Server](https://github.com/pirainogi/gobble-server). You will need to create an API key with RapidAPI in order to seed your data. **There is a limit to the amount of free data that you can seed from the API, so please be aware before you seed thousands of recipes.**

## Prerequisites

You will need `node` or `yarn` installed on your computer in order to run this app.

In order to run this app, first clone the server repo down onto your local machine and follow the instructions in the readme to spin up the server. Then clone this repo down onto your local machine and navigate to that directory. Then install the necessary dependencies with either:
* `npm install`
* `yarn install`

Then you can start running the program with `npm start`.

## NPM Packages
* Moment.js
* Moment-Timezone.js
* React-Big-Calendar.js
* React-Dom.js
* React-Router-Dom.js


## Home Page
(./public/gobble_home pg.png)

## Search for Recipes

## Save Your Favorite Recipes

## Schedule Events on Personalized Calendar


# Features

* Users are authenticated with bcrypt and JWT
* Upon sign in, users can search and save recipes
* Users can also create events that correlate to recipes

Recipes can also be categorized in one or more of the following ways:

* Dairy Free
* Gluten Free
* Healthy
* Keto
* Vegetarian
* Vegan
* Whole30

# WIP Features/Functionality

* Ability to specify the type of event: purchase, prep, or consume
* Ability to link a recipe with a prep or consume event
* Ability to create grocery lists
* Ability to link a grocery list with a purchase event
* Authenticating a user with Google OAuth
* Pushing calendar events from the application's built in calendar to a user's Google Calendar
* Pushing grocery lists to a user's Google Keep
* Allowing a user to specify what type of recipes they would like to exclude based on their diet (if a user self-selects gluten-free, exclude all recipes that aren't categorized as gluten-free)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

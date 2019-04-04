import React from 'react';
import '../css/Home.css';
// import { NavLink } from 'react-router-dom';


const Home = () => {

  return (
    <div>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/fork-knife.png'} alt='gobble icon'></img>
      </div>
      <div className="home">
        <h1>search and save recipes. </h1>
        <h1>create a fully planned meal-prepping calendar.</h1>
        <h1>never worry about <br></br>what the <i>fork</i> is for dinner again.</h1><br></br>
        <h3>join gobble today to get started...</h3>
      </div>
    </div>
  )
}

export default Home;

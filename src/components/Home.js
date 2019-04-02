import React from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';


const Home = () => {

  return (
    <div className="home">
      <h1> HOME</h1>
      <NavLink to='/login' activeClassName='active'><h1>login</h1></NavLink>
      <NavLink to='/signup' activeClassName='active'><h1>signup</h1></NavLink>
    </div>
  )
}

export default Home;

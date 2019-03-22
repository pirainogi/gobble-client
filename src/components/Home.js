import React from 'react';
import '../css/Home.css';
import Footer from './Footer'
import Header from './Header'

const Home = () => {



  return (
    <div id="home">
      <div>
        <Header />
      </div>
      <div>
        <h1> HOME</h1>
        <p> login </p>
        <p> sign up</p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;

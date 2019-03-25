import React from 'react';
import '../css/Footer.css';
// import 'github-logo' from '..../public/github-logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <p> Designed by Gabbie Piraino</p>
      <a href='https://github.com/pirainogi'>
        <img src={process.env.PUBLIC_URL + '/github.png'} alt='github logo'></img>
      </a>
      <a href='https://www.linkedin.com/in/gabriellepiraino/'>
        <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt='linkedin logo'></img>
      </a>
      <a href='https://medium.com/@nerdplusdog'>
        <img src={process.env.PUBLIC_URL + '/medium.png'} alt='medium logo'></img>
      </a>
    </div>
  )
}

export default Footer

// <img src='public/github-logo.png' alt='github logo' height='15' width='15'></img>

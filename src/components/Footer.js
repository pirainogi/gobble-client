import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='designed'>
        <p> Designed by Gabbie Piraino </p>
      </div>
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
        // <img src={process.env.PUBLIC_URL + '/fork.svg'} alt='fork'></img>

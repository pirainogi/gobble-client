import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {

  //if there's a current user, load the logged in header, otherwise only render the login and signup links 
  render(){
    return (
      <div className='header' id='header'>
        {this.props.currentUser.id ?
          <>
            <img className="header-logo" src={process.env.PUBLIC_URL + '/fork-knife.png'} alt='gobble icon'></img>
            <NavLink to='/' activeClassName='active'><h1>gobble</h1></NavLink>
            <ul id='navbar'>
              <li><NavLink to='/search' activeClassName='active' id='navlink'>search</NavLink></li>

              <li><NavLink to='/recipebox' activeClassName='active' id='navlink'>recipebox</NavLink></li>

                <li><NavLink to='/calendar' activeClassName='active' id='navlink'>calendar</NavLink></li>

              <li><NavLink to='/profile' activeClassName='active' id='navlink'>profile</NavLink></li>

              <li><NavLink to='/' activeClassName='active' id='navlink' onClick={this.props.logout}>logout</NavLink></li>
            </ul>
          </>
          :
          <>
            <NavLink to='/' activeClassName='active'><h1>GOBBLE</h1></NavLink>
            <ul id='navbar'>
              <li><NavLink to='/login' activeClassName='active' id='navlink'>login</NavLink></li>

              <li><NavLink to='/signup' activeClassName='active' id='navlink'>sign up</NavLink></li>
            </ul>
          </>
        }
      </div>
    )
  }

}

export default Header;

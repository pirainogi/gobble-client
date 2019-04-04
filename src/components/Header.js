import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {

  // constructor(props){
  //   super(props)
  //
  //   this.state = {}
  // }
  //
  // handleScroll = () => {
  //   this.setState({
  //     scroll: window.scrollY
  //   })
  // }
  //
  // componentDidMount(){
  //   const header = document.getElementById('header')
  //   this.setState({
  //     top: header.offsetTop,
  //     height: header.offsetHeight
  //   })
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  //
  // componentDidUpdate(){
  //   this.state.scroll > this.state.top ?
  //     document.body.style.paddingTop = 0 :
  //     document.body.style.paddingTop = 0
  // }

  render(){
    // console.log(this.props, this.props.currentUser);
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

// <li><NavLink to='/dashboard' activeClassName='active' id='navlink'>dashboard</NavLink></li>

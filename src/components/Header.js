import React, { Component } from 'react';
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
    // console.log(this.props);
    return (
      <div className='header' id='header'>
        <NavLink to='/' activeClassName='active'><h1>GOBBLE</h1></NavLink>
        <ul id='navbar'>
          <li><NavLink to='/search' activeClassName='active' id='navlink'>search</NavLink></li>
          <li><NavLink to='/recipebox' activeClassName='active' id='navlink'>recipebox</NavLink></li>
          <li><NavLink to='/profile' activeClassName='active' id='navlink'>profile</NavLink></li>
        </ul>
      </div>
    )
  }

}

export default Header;

// <li><NavLink to='/dashboard' activeClassName='active' id='navlink'>dashboard</NavLink></li>

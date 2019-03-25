import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {

  constructor(props){
    super(props)

    this.state = {}
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    })
  }

  componentDidMount(){
    const header = document.getElementById('header')
    this.setState({
      top: header.offsetTop,
      height: header.offsetHeight
    })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(){
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = 0 :
      document.body.style.paddingTop = 0
  }

  render(){
    // console.log(this.props);
    return (
      <div className={this.state.scroll > this.state.top ? 'fixed-header' : 'header'} id='header'>
        <NavLink to='/' activeClassName='active'><h1> LOGO</h1></NavLink>
        <ul id='navbar'>
          <li><NavLink to='/search' activeClassName='active' id='navlink'>Search</NavLink></li>
          <li><NavLink to='/recipebox' activeClassName='active' id='navlink'>RecipeBox</NavLink></li>
          <li><NavLink to='/dashboard' activeClassName='active' id='navlink'>Dashboard</NavLink></li>
          <li><NavLink to='/profile' activeClassName='active' id='navlink'>Profile</NavLink></li>
        </ul>
      </div>
    )
  }

}

export default Header;

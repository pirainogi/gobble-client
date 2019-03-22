import React, { Component } from 'react';
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
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0
  }

  render(){
    console.log(this.state);
    return (
      <div className={this.state.scroll > this.state.top ? 'fixed-header' : 'header'} id='header'>
      <h1> LOGO</h1>
      <h4> Search Link </h4>
      </div>
    )
  }

}

export default Header;

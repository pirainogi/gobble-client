import React, { Component } from 'react';
import '../css/Search.css';
// import { connect } from 'react-redux'

class Search extends Component {
  //
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     searchInput: ''
  //   }
  //
  //   this.handleSearchInput = this.handleSearchInput.bind(this);
  // }
  //
  // handleSearchInput(e){
  //   this.setState({
  //     searchInput: e.target.value
  //   })
  //   console.log(this.state.searchInput);
  //   mapDispatchToProps(this.state.searchInput)
  // }

  render(){
    return (
      <form >
        <input
          type='text'
          placeholder='Search for Recipes'
        />
      </form>
    )
  }


}

export default (Search);

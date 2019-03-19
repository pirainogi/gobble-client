import React, { Component } from 'react';
import '../css/Search.css';
import { connect } from 'react-redux'

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
    console.log(this.props);
    return (
      <form>
        <input
          type='text'
          placeholder='Search for Recipes'
          value={this.props.searchInput}
        />
      </form>
    )
  }


}
//
// function mapStateToProps(state){
//   return {
//     searchInput: state.searchInput
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   console.log(dispatch);
//   return {
//       getSearchValue: () => getSearchValue(dispatch)
//   }
// }

export default (Search);

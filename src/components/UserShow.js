import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from './UserInfo';
import Button from './Button';
import { connect } from 'react-redux'
import { fetchUser } from '../action-creators/actions'

class UserShow extends Component {

  componentDidMount(){
    console.log(this.props.currentUser);
    this.props.getuser()
  }

  render(){
    console.log(this.props.currentUser);
    if(this.props.currentUser.length === 1){
      return (
        <div className="user-show">
          <h1> NAME: {this.props.currentUser[0].name}</h1>
          <h2> PIC PLACEHOLDER </h2>
          <UserInfo />
          <Button text={'Change PW'}/>
          <Button text={'Delete Acct'}/>
        </div>
      )
    }
    else {
      return null
    }
  }

}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    getuser: () => fetchUser(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

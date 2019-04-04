import React, { Component } from 'react';
import '../css/EventForm.css';

class EventForm extends Component {

  state = {
    date: {},
    startTime: {},
    endTime: {},
    eventStart: {},
    eventEnd: {},
    recipeName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('pushing submit button and logging state', this.state);
    let stringifiedStart = this.state.date + "T" + this.state.startTime + ":00.000-05:00"
    let stringifiedEnd = this.state.date + "T" + this.state.endTime + ":00.000-05:00"
    // console.log(stringifiedStart, stringifiedEnd, this.state.recipeName);
    this.props.createEvent(stringifiedStart, stringifiedEnd, this.state.recipeName)
  }

  render(){
    console.log(this.props);
    return (
      <div className='form'>

          <form>
            <label><b>Select a Date:</b></label><br></br>
            <input type="date" id="event-date" name="date" min="2019-04-03" max="2019-12-31" onChange={this.handleChange} required></input><br></br>
            <label><b>Select a Start Time:</b></label><br></br>
            <input type="time" id="event-start" name="startTime" min="00:00" max="23:00" onChange={this.handleChange} required></input><br></br>
            <label><b>Select an End Time:</b></label><br></br>
            <input type="time" id="event-end" name="endTime" min="01:00" max="24:00" onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Recipe Name:</b></label><br></br>
            <input type="text" id="recipeName" name="recipeName" placeholder={this.props.recipeForEvent} onChange={this.handleChange} required></input><br></br><br></br>
            <button onClick={this.handleSubmit}>Add to Calendar</button>
          </form>

      </div>
    )
  }
}


export default EventForm;

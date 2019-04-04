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

  createEvent = () => {
    let stringifiedStart = this.state.date + "T" + this.state.startTime + ":00.000-05:00"
    let stringifiedEnd = this.state.date + "T" + this.state.endTime + ":00.000-05:00"
    console.log(stringifiedStart, stringifiedEnd);

    fetch("http://localhost:3000/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.userID,
        name: this.state.recipeName,
        eventType: "tbd",
        eventStart: stringifiedStart,
        eventEnd: stringifiedEnd
      })
    })
    .then(res => res.json())
    .then(addedEvent => {
      console.log(addedEvent);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('pushing submit button and logging state', this.state);
    this.createEvent()
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
            <input type="text" id="recipeName" name="recipeName" onChange={this.handleChange} required></input><br></br><br></br>
          </form>
          <button onClick={this.handleSubmit}>Add to Calendar</button>

      </div>
    )
  }
}


export default EventForm;

import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone';
//importing react and all libraries
import '../css/Calendar.css';
//importing the CSS for this component

moment.locale('en');
moment.tz.setDefault("America/New_York");
const localizer = BigCalendar.momentLocalizer(moment);
//set the locale and timezone to NYC and passing it to BigCal library

class Calendar extends Component {

  state = {
    events: [],
  }

  //on mount, map over all the events that have been passed down as props and create event start and end times and set those to the local state in this component
  componentDidMount() {
    if(this.props.events) {
      let calEvents = this.props.events.map( event => {
          event.eventEnd = new Date(event.eventEnd)
          event.eventStart = new Date(event.eventStart)
          return event
        })
      this.setState({
        events: calEvents
      })
    }
  }

  //conditionally render the calendar upon the props being passed down
  render(){
    console.log(this.props)
    return (
      <div className='calendar'>
      {this.props.events ?
        <div style={{ height: 500}}>
          <BigCalendar
            events={this.state.events}
            step={30}
            defaultView='month'
            views={['month', 'week', 'day']}
            defaultDate={new Date()}
            localizer={localizer}
            startAccessor="eventStart"
            endAccessor="eventEnd"
            titleAccessor="name"
          />
        </div> :
        <p>calendar loading</p>
      }
      </div>
    )
  }

}

export default Calendar;

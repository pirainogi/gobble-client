import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment-timezone';
import '../css/Calendar.css';
moment.locale('en');
moment.tz.setDefault("America/New_York");
const localizer = BigCalendar.momentLocalizer(moment);


class Calendar extends Component {

  state = {
    events: [],
  }

  componentDidMount() {
    console.log(this.props.events);
    let calEvents = this.props.events.map( event => {
        event.eventEnd = new Date(event.eventEnd)
        event.eventStart = new Date(event.eventStart)
        return event
      })
    console.log(calEvents);
    this.setState({
      events: calEvents
    })
  }


  render(){
    console.log('calendar props', this.props, 'state', this.state)
    return (
      <div className='calendar'>
      {this.props.events[0].id ?
        <div style={{ height: 450}}>
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

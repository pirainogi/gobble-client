import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import '../css/Calendar.css';
moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);


class Calendar extends Component {

  render(){
    return (
      <div style={{ height: 700}}>
        <BigCalendar
          events={this.props.events}
          step={30}
          defaultView='week'
          views={['month', 'week', 'day']}
          defaultDate={new Date()}
          localizer={localizer}
        />
      </div>
    )
  }

}

export default Calendar;

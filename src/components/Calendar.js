import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import '../css/Calendar.css';
moment.locale('en-US');
const localizer = BigCalendar.momentLocalizer(moment);


class Calendar extends Component {




  render(){
    console.log(this.props);
    return (
      <div>
        <Header />
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
        <Footer />
      </div>
    )
  }

}

export default Calendar;

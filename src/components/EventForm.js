import React from 'react';
import '../css/EventForm.css';

const EventForm = (props) => {
  console.log(props);


  return (
    <div className='form'>

        <form>
          <label><b>Select a Date:</b></label><br></br>
          <input type="date" id="event-date" name="date" min="2019-04-03" max="2019-12-31"></input><br></br>
          <label><b>Select a Start Time:</b></label><br></br>
          <input type="time" id="event-start" name="event-start" min="00:00" max="23:00" required></input><br></br>
          <label><b>Select an End Time:</b></label><br></br>
          <input type="time" id="event-end" name="event-end" min="01:00" max="24:00" required></input><br></br><br></br>
        </form>
        <button >Add to Calendar</button>

    </div>
  )
}


export default EventForm;

import React from 'react';

const EventModal = (props) => {

  let currDate = new Date()

  let toggleClassName = props.show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={toggleClassName}>
      <section className="modal-main">
        <form>
          <label>Select a Date:</label>
          <input type="date" id="event-date" name="date" value={currDate} min="2019-04-03" max="2019-12-31"></input>
        </form>
        <button>Close</button>
      </section>
    </div>
  )
}


export default EventModal;
